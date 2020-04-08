import React, {useState} from 'react';
import {
    StyledFilterSubSection, 
    StyledFilterSubSectionTitle, 
    StyledFilterSubSectionFilters, 
    StyledFilterSubSectionFilter } from './StyledCharacterFilter';

const CharacterFilterSub = ({filter, selectedFilters, addFilter, removeFilter}) => {
    const { key, filters } = filter;
    const selectedFilter = selectedFilters.filter((filter) => filter.key === key);
    const [ filterParam ] = selectedFilter;
    const [isFilterSelected, setIsFilterSelected] = useState(selectedFilter.length > 0 ? true : false);

    const handleOnChange = (value) => {
        const updatedFilter = {
            'key': key,
            'filter': value 
        };

        if (selectedFilter.length) {
           removeFilter(updatedFilter);
           setIsFilterSelected(false);
        } else {
            addFilter(updatedFilter);
            setIsFilterSelected(true);
        }
    }

    return (
        <StyledFilterSubSection>
            <StyledFilterSubSectionTitle>
                {key}
            </StyledFilterSubSectionTitle>
            <StyledFilterSubSectionFilters>
                {
                    filters.map((filterValues) => {
                        return (
                            <StyledFilterSubSectionFilter key={filterValues}>
                                <label>
                                    <input 
                                        type="checkbox"
                                        name={filterValues}
                                        checked={filterParam && filterValues === filterParam.filter ? 'checked' : ''}
                                        onChange={() => handleOnChange(filterValues)}
                                        disabled={filterParam && filterValues !== filterParam.filter && isFilterSelected}
                                    />
                                    <span>{filterValues}</span>
                                </label>
                            </StyledFilterSubSectionFilter>
                        )
                    })
                }
            </StyledFilterSubSectionFilters>
        </StyledFilterSubSection>
    )
}

export default CharacterFilterSub;