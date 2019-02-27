import React from 'react';
import { Button } from 'antd-mobile';
import Deck from './Deck';
import {List, ListItem} from 'native-base';


class ListDeck extends React.Component{

    render(){
        const {decks} = this.props;
        
        return(
            <List>
              {decks.map((deck) => <ListItem>
                                     <Deck {...deck}/>
                                   </ListItem>)}
            </List>
        );
    };
    
};

export default ListDeck;
