import DeckModel from '../models/deckModel';
import uuidv1 from 'uuid/v1';


const deckOperations = (realm) => {
    return {
        createDeck: ({title}) => {
            return new Promise((resolve, reject) => {
                let deck;
                realm.write(() => {
                    deck = realm.create(DeckModel.name(),
                                            {id: uuidv1(), title: title,
                                             createAt: new Date(), modifiedAt: new Date(),
                                             cards: []});

                });
                resolve(deck);
            });
        },
        
        updateDeck: (deck) => {
            return new Promise((resolve, reject) => {
                realm.write(() => {
                    let deck = realm.create(DeckModel.name()(),
                                            {...deck, modifiedAt: new Date()}, true);
                    
                    resolve(deck);
                });
            });
        },

        deleteDeck: (deckID) => {
            return new Promise((resolve, reject) => {
                realm.write(() => {
                    let deck = realm.delete(realm.objectForPrimaryKeydeck(deckID));
                    resolve(deck);
                });
            });
        },

        listDecks: () => {
            return Promise.resolve(realm.objects(DeckModel.name()()));
        },
    };
};

export default deckOperations;
