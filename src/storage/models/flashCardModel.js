import DeckModel from './deckModel';


export default class FlashCardModel{
    static name(){
        return FlashCardModel.schema.name;
    }
    
    static schema = {
        name: 'FlashCard',
        primaryKey: 'id',
        properties:{
            id: 'string',
            question: 'string',
            answer: 'string',
            createAt: 'date',
            modifiedAt: 'date',
            deck: {type: 'linkingObjects',
                   objectType: 'Deck',
                   property:'cards'}
        }
    }
};

