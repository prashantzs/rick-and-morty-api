import { combineReducers } from 'redux';
import character from './character';
import characterFilter, { selectedFilters } from './characterFilter';

export default combineReducers ({
    character,
    characterFilter,
    selectedFilters
});