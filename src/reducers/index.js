import {USER_CHOICE,PC_CHOICE, PAGE,PC_SCORE,USER_SCORE,ROUND} from '../actions/actions.js';

const initStore={
    userChoice:'',
    cumputerChoice:'',
    page:'menu',
    round:0,
    scoreUser:0,
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
        case PC_SCORE:
            return {...state,scoreUser:action.payload};
        case USER_SCORE:
            return {...state,scoreCpu:action.payload};  
        case ROUND:
            return {...state,round:action.payload};     
        default:
            return state;
        }
}



export default allChoice;