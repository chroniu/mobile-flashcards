/**
   @describe Export the root reducer
*/
import {combineReducers} from 'redux';
import {decks} from '../deck/reducer';
import {cards} from '../cards/reducer';
import {loading} from '../loading/reducer';
//import {errors} from '../errors/reducer';

export const rootReducer = combineReducers({
    decks,
    cards,
    loading,
});

export default rootReducer;
