import * as Actions from './actions';

export const cards = (state = {}, action) => {
    console.log('redutor', state, action);
    switch(action.type){
    case Actions.CREATE_CARD_SUCCESS:
        return {...state, [action.payload.id] : action.payload};
    default:
        return state;
    };

};

