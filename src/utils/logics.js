import {createLogic} from 'redux-logic';

const createLogicsHelper = (ops) => {
    let logics = [];
    for (let val of ops){
        const [actionName, operation] = val;
        
        logics.push(
            createLogic({
                name: `${actionName}Logic`,
                type: actionName,
                latest: true,
                processOptions:{
                    dispatchReturn: true,
                    successType: `${actionName}_SUCCESS`,
                    failType: `${actionName}_FAILURE`,
                },
                process({api, getState, action}){
                    return operation(api, getState, action);
                }
            })
        );
    }
    return logics;
};

export default createLogicsHelper;
