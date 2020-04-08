const filterData = (data, searchTerm) => {
    return data.filter((character) => {
        //console.log(character.name);
        console.log('Search Term: ' + searchTerm);
        return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

export default function character(character = {
    info: [],
    results: [],
    filteredResults: [],
    searchParams: '',
    isLoading: false,
    currentPage: 1,
    totalPages: 0
    }, action) {
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return Object.assign({}, {
                    ...character,
                    isLoading: true
                }
            );
        case 'FETCH_CHARACTER_SUCCESS':
            const { results: newresults, info: newinfo } = action.payload; 
            const newfilteredResults = filterData(newresults, character.searchParams);

            const {info, results, filteredResults} = character;
            return Object.assign({}, {
                ...character,
                info: newinfo,
                results: [...results, ...newresults],
                filteredResults: [...filteredResults, ...newfilteredResults],
                totalPages: newinfo.pages,
                isLoading: false
            })
        case 'SEARCH_CHARACTER':
            const filteredCharacters = filterData(character.results, action.payload);
            return Object.assign({}, {
                ...character,
                searchParams: action.payload,
                filteredResults: filteredCharacters
            })
        case 'SET_PAGE_INDEX':
            return Object.assign({}, {
                ...character,
                currentPage: action.payload
            })
        default:
            return character;
    }
}