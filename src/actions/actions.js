export const USER_CHOICE = 'USER_CHOICE';
export const PC_CHOICE = 'PC_CHOICE';
export const PAGE='PAGE';



export function playerChoice(choice){
    const action ={
        type:USER_CHOICE,
        payload: choice
    }
    
    return action;
}

export function pcChoice(choice){
    
    let options = ['pencil','paper','rock','scissors'];

    let result = options[Math.floor(Math.random() * options.length)];

    console.log(result);

    
    const action = {
        type:PC_CHOICE,
        payload:result
    } 

    return action;
};

export function pageViewAction(page){
    const action = {
        type:PAGE,
        payload:page
    }
    return action;
}