import FlashCardModel from './models/flashCardModel';
import DeckModel from './models/deckModel';
import Realm from 'realm';
import createDeckOperations from './operations/deck';
//import createFlashCardOperations from './operations/flashCards';

//TODO set path
const realmInstance = new Realm({
    path: 'flashcards.realm',
    inMemory: true,
    schema: [FlashCardModel.schema, DeckModel.schema]
});


export const deckOperations = createDeckOperations(realmInstance);
export const flashCardOperations = createFlashCardOperations(realmInstance);
