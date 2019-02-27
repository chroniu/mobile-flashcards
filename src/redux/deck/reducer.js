import * as Actions from './actions';

export const decks = (state = {}, action) => {
    console.log('redutor', state, action);
    switch(action.type){
    case Actions.CREATE_DECK_SUCCESS:
        return {...state, [action.payload.id] : action.payload};
    default:
        return state;
    };

};

export default decks;
