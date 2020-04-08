import React from 'react';
import { connect } from 'react-redux';
import {StyledDisplayFilter} from './StyledDisplayFilter';
import FilterChip from '../FilterChip/FilterChip';

const DisplayFilter = ({selectedFilters, removeFilter}) => {
    return (
        <StyledDisplayFilter>
        {
            selectedFilters && selectedFilters.map((selectedFilter) => {
                return <FilterChip key={selectedFilter.key} character={selectedFilter} onRemoveFilter={removeFilter} />
            })
        }
        </StyledDisplayFilter>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedFilters: state.selectedFilters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFilter: (filter) => {
            dispatch({type: 'REMOVE_FILTER', payload: filter})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFilter);