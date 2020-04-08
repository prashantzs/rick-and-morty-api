import axios from 'axios';
//import { fetchCharacters } from '../services/characterService';

// fetch characters success
function fetchCharacterSuccess(data) {
    return {
        type: 'FETCH_CHARACTER_SUCCESS',
        payload: data
    }
}

// fetch characters sync
export function fetchCharactersSync() {
    return {
        type: 'FETCH_CHARACTERS'
    }
}

// fetch characters async
export function fetchCharactersAsync(URL) {
    return (dispatch) => {
        dispatch(fetchCharactersSync());
        axios.get(URL)
        .then((response) => {
            dispatch(fetchCharacterSuccess(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

// add filter
export function addFilter (filter) {
    return {
        type: 'ADD_FILTER',
        payload: filter
    }
}

// remove filter
export function removeFilter (filter) {
    return {
        type: 'REMOVE_FILTER',
        payload: filter
    }
}

// search by name
export function searchCharacterByName (character) {
    return {
        type: 'SEARCH_CHARACTER',
        payload: character
    }
}

// request page number
export function setPageIndex (pageIndex) {
    return {
        type: 'SET_PAGE_INDEX',
        payload: pageIndex
    }
}