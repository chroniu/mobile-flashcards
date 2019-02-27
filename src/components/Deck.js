import React from 'react';
import {Card, CardItem, Text} from 'native-base';

const Deck = ({title, numCards}) => (
    <Card>
      <CardItem cardbody bordered >
        <Text>{title}</Text>
      </CardItem>
      <CardItem footer bordered>
        <Text>{`${numCards} cards`}</Text>
      </CardItem>
    </Card>
);

export default Deck;

