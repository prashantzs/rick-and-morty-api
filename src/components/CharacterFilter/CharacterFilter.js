import React from 'react';
import { connect } from 'react-redux';
import CharacterFilterSection from './CharacterFilterSection';
import { 
    StyledFilter, 
    StyledFilterTitle } from './StyledCharacterFilter';
import { addFilter, removeFilter } from '../../actions/actionCreater';

const CharacterFilter = (props) => {
    return (
        <StyledFilter>
            <StyledFilterTitle>
                Filter
            </StyledFilterTitle>
            {
                props.filters.map((filterObject) => {
                    return (
                        <CharacterFilterSection 
                            key={filterObject.key} 
                            filter={filterObject}
                            selectedFilters={props.selectedFilters}
                            addFilter={props.addFilter}
                            removeFilter={props.removeFilter}/>
                    )
                })
            }
        </StyledFilter>
    )
};

const mapStateToProps = (state) => {
    return {
        filters: state.characterFilter,
        selectedFilters: state.selectedFilters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFilters: () => {
            dispatch({type: 'GET_FILTERS'});
        },
        addFilter: (filter) => {
            dispatch(addFilter(filter));
        },
        removeFilter: (filter) => {
            dispatch(removeFilter(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterFilter);