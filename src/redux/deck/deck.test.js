import React from 'react';
import { createMockStore } from 'redux-logic-test';
import deckLogic from './logic';
import {decks} from './reducer';
import Actions from './actions';
const logic = [...deckLogic]; // array of logic to use/test
import {deckOperations} from '../../storage/storage-tests';

const injectedDeps = {
    api: deckOperations
};



const initialState = {};
const reducer = decks;

const store = createMockStore({
    initialState,
    reducer,
    logic,
    injectedDeps
});

describe('decks Logic', () => {
    it('should create a new deck', (done) => {
        store.dispatch(Actions.createDeck('New Deck'));
        store.whenComplete(() => {
            console.log(store.actions);
            console.log('state', store.getState());
            deckOperations.close();
            expect(store.getState()).resolves.toEqual([
                { type: Actions.CREATE_DECK, title: 'New Deck' },
                { type: Actions.CREATE_DECK_SUCCESS, payload:{title: 'NewDeck'}}
            ]);
            console.log('xxxxx', store.getState());
            done();
        });
    });
});
