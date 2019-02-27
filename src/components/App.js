import React from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Deck from './Deck';


export default class FlashCardApp extends React.Component {
    // Later on in your component
    state = {
        loaded: false,
    }
    
    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({loaded: true});
    }
    
    render() {
        if(!this.state.loaded)
            return (<View><Text>Loading</Text></View>);
        
        return (
            <Container>
              <Header>
                <Left>
                  <Button transparent>
                    <Icon name='menu' />
                  </Button>
                </Left>
                <Body>
                  <Title>List of Decks</Title>
                </Body>
                <Right />
              </Header>
              <Content>
                <Deck title="Test Deck" numCards={10}/>
              </Content>
            </Container>
        );
    }
}
