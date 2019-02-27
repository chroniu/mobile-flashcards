import React from 'react';
import {connect} from 'react-redux';
import DeckActions from '../redux/deck/actions';
import ListDeck from './ListDeck';
import {Spinner} from 'native-base';


const mapStateToProps = (state, props) =>{
    return {
        decks: state.decks,
        loading: (state.loading.decks !== true ? false : true),
        ...props,
        
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        createDeck: (title) => dispatch(DeckActions.createDeck(title)),
        deleteDeck: (deckID) => dispatch(DeckActions.deleteDeck(deckID)),
        updateDeck: (deck) => dispatch(DeckActions.updateDeck(deck)),
        fetchDecks: () => dispatch(DeckActions.listDecks()),
    };
};

class ListDeckContainer extends React.Component{
    componentDidMount(){
        this.props.fetchDecks();
    }
    
    render(){
        if(this.props.loading){
            return(<Spinner color='blue' />);
        }else{
            return(<ListDeck decks={this.props.decks}/>);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDeckContainer);
