
export const CREATE_DECK = 'CREATE_DECK';
export const CREATE_DECK_SUCCESS = 'CREATE_DECK_SUCCESS';
export const DELETE_DECK = 'DELETE_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';
export const LIST_DECKS  = 'LIST_DECKS';

export const createDeck = (title) => {
    return {
        type: CREATE_DECK,
        title,
    };
};

export const deleteDeck = (deckID) => {
    return {
        type: DELETE_DECK,
        deckID,
    };
};

export const updateDeck = (deck) => {
    return {
        type: UPDATE_DECK,
        deck,
    };
};

export const listDecks = () => {
    return {
        type: LIST_DECKS,
    };
};

export default{
    CREATE_DECK,
    UPDATE_DECK,
    DELETE_DECK,
    LIST_DECKS,
    
    createDeck,
    updateDeck,
    deleteDeck,
    listDecks
};
