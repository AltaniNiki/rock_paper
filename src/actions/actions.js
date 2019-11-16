export const USER_CHOICE = 'USER_CHOICE';
export const PC_CHOICE = 'PC_CHOICE';
export const PC_SCORE = 'PC_SCORE';
export const USER_SCORE = 'USER_SCORE';
export const PAGE='PAGE';
export const ROUND='ROUND';
// import {store} from '../index.js';

export function roundGame(roundVal){
    const action = {
        type:ROUND,
        payload:roundVal
    } 

    return action;
};

export function playerChoice(choice){
    const action ={
        type:USER_CHOICE,
        payload: choice
    }
    
    return action;
}

export function pcChoice(choice){
    const action = {
        type:PC_CHOICE,
        payload:choice
    } 

    return action;
};

export function scorePlayer(score){
    const action={
        type:USER_SCORE,
        payload:score
    }
    return action;
}

export function scorePc(score){
    const action={
        type:PC_SCORE,
        payload:score
    }

    return action;
}


export function pageViewAction(page){
    const action = {
        type:PAGE,
        payload:page
    }
    return action;
}