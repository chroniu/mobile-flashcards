import {createLogic} from 'redux-logic';
import * as Actions from './actions';
import createLogicsHelper from '../../utils/logics';


const ops = [[Actions.CREATE_CARD,
              (api, getState, action) => api.createFlashCard({question: action.question,
                                                              answer: action.answer,
                                                              deck: action.deck})],
             [Actions.DELETE_CARD,
              (api, getState, action) => api.deleteCard(action.cardID)],
             [Actions.UPDATE_CARD,
              (api, getState, action) => api.updateDeck(action.card)],
             [Actions.FETCH_CARDS,
              (api, getState, action) => api.listDecks(action.deckID)]];


const cardLogics = createLogicsHelper(ops);
export default cardLogics;
