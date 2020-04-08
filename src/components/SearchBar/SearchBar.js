import React, {useState} from 'react';
import { connect } from 'react-redux';
import { searchCharacterByName } from '../../actions/actionCreater';
import { 
    StyledSearchBar, 
    StyledSearchForm, 
    StyledSearchInput } from './StyledSearchBar';

const SearchBar = ({searchParams, searchCharacter}) => {

    const [searchParam, setSearchParam] = useState(searchParams || '');

    const handleInputChange = (event) => {
        setSearchParam(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchCharacter(searchParam);
    }

    return (
        <StyledSearchBar>
            <StyledSearchForm onSubmit={handleSubmit}>
                <StyledSearchInput type="text" value={searchParam} onChange={handleInputChange} placeholder="Search character by name"/>
            </StyledSearchForm>
        </StyledSearchBar>
    )
};

const mapStateToProps = (state) => {
    return {
        searchParams: state.searchParams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchCharacter: (name) => {
            dispatch(searchCharacterByName(name))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);