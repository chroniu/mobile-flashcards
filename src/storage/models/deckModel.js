import {FlashCardModel} from './flashCardModel';


export default class DeckModel{
    static name(){
        return DeckModel.schema.name;
    }
    
    static schema = {
        name: 'Deck',
        primaryKey: 'id',
        properties:{
            id: 'string',
            title: 'string',
            createAt: 'date',
            modifiedAt: 'date',
            cards: 'FlashCard[]'//`//${FlashCardModel.name()}[]`,
        },
    }
};


