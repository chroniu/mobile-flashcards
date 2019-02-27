
export const CREATE_CARD = 'CREATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const FETCH_CARDS = 'FETCH_CARDS';


export const createCard = (question, answer, deck) => {
    return {
        type: CREATE_CARD,
        question,
        answer,
        deck,
    };
};

export const updateCard = (card) => {
    return {
        type: UPDATE_CARD,
        card,
    };
};

export const deleteCard = (cardID) => {
    return {
        type: DELETE_CARD,
        cardID
    };
};

export const fetchCards = (deckID) => {
    return {
        type: FETCH_CARDS,
        deckID,
    };
};

export default{
    CREATE_CARD,
    DELETE_CARD,
    UPDATE_CARD,
    FETCH_CARDS,

    createCard,
    updateCard,
    deleteCard,
    fetchCards,
};
