import FlashCardModel from '../models/flashCardModel';
import uuidv1 from 'uuid/v1';

const flashCardOperations = (realm) => {
    return {
        createFlashCard: ({question, answer, deck}) => {
            return new Promise((resolve, reject) => {
                let deck;
                realm.write(() => {
                    deck = realm.create(FlashCardModel.name(),
                                        {id: uuidv1(), question: question,
                                         answer: answer, deck: deck,
                                         createAt: new Date(), modifiedAt: new Date()});

                });
                resolve(deck);
            });
        },
            
        updateFlashCard: (card) => {
            return new Promise((resolve, reject) => {
                realm.write(() => {
                    let card = realm.create(FlashCardModel.name(),
                                            {...card, modifiedAt: new Date()}, true);
                    
                    resolve(card);
                });
            });
        },

        deleteFlashCard: (cardID) => {
            return new Promise((resolve, reject) => {
                realm.write(() => {
                    let card = realm.delete(realm.objectForPrimaryKeydeck(cardID));
                    resolve(card);
                });
            });
        },

        listFlashCards: (deckID) => {//TODO
            return Promise.resolve(realm.objects(FlashCardModel.name()()));
        },
    };
};

export default flashCardOperations;
