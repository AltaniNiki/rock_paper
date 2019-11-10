import {USER_CHOICE,PC_CHOICE, PAGE} from '../actions/actions.js';

const initStore={
    userChoice:'',
    cumputerChoice:'',
    page:'menu',
    round:0,
    scroreUser:0,
    scoreCpu:0
}


function allChoice(state=initStore,action){
    switch(action.type){
        case USER_CHOICE:
            return {...state,userChoice:action.payload};
        case PC_CHOICE:
            return {...state,cumputerChoice:action.payload};
        case PAGE:
            return {...state,page:action.payload};   
        default:
            return state;
        }
}



export default allChoice;