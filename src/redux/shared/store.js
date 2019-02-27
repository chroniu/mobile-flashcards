import {createStore, applyMiddleware, compose} from 'redux';
import {createLogicMiddleware} from 'redux-logic';
import {rootReducer} from './rootReducer';
import API from '../../storage/storage';
import arrLogic from './logic';

import logger from 'redux-logger';


const deps = {
    API,
};  

export const configureStore = () => {
    
    const logicMiddleware = createLogicMiddleware(arrLogic, deps);
    const middlewares = [
        logicMiddleware,
        logger,
    ];
        
    return createStore(rootReducer, compose(applyMiddleware(...middlewares)));
};

export default configureStore;
