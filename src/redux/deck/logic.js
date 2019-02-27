import {createLogic} from 'redux-logic';
import * as Actions from './actions';
import createLogicsHelper from '../../utils/logics';


const ops = [[Actions.CREATE_DECK,
                  (api, getState, action) => api.createDeck({title:action.title})],
                 [Actions.DELETE_DECK,
                  (api, getState, action) => api.deleteDeck(action.deckID)],
                 [Actions.UPDATE_DECK,
                  (api, getState, action) => api.updateDeck(action.deck)],
                 [Actions.LIST_DECKS,
                  (api, getState, action) => api.listDecks()]];

const deckLogics = createLogicsHelper(ops);
export default deckLogics;
