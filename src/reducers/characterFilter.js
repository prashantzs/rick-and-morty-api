const filter = [
    {
        key: 'Species',
        filters: ['Alien', 'Human', 'Humanoid']
    },
    {
        key: 'Gender',
        filters: ['Female', 'Male', 'Unknown']
    }
];

const filtersSelected = [
    {
        key: 'Species',
        filter: 'Alien'
    },
    {
        key: 'Gender',
        filter: 'Male'
    }
];

export default function characterFilter(characterFilters = filter, action) {
    switch (action.type) {
        case 'GET_FILTERS':
            return action.payload;
        default:
            return characterFilters;
    }
}

export function selectedFilters(selectedFilters = filtersSelected, action) {
    switch (action.type) {
        case 'ADD_FILTER':
            selectedFilters.push(action.payload);
            return [].concat(selectedFilters);
        case 'REMOVE_FILTER':
            const removedfilter = action.payload;
            const updatedSelectedFilter = selectedFilters.filter((filterObject) => {
                return filterObject.key !== removedfilter.key;
            });
            return [].concat(updatedSelectedFilter);
        default:
            return selectedFilters;
    }
}