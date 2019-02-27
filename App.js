import React from 'react';

import {configureStore} from './src/redux/shared/store';
import { Provider } from "react-redux";
import {View} from 'react-native';
import FlashCardApp from './src/components/App';



export default class App extends React.Component{
    render(){
        return(
            <Provider store={configureStore()}>
              <View>
                <FlashCardApp/>
              </View>
            </Provider>
        );
    }
};
