//tic tac toe

const input = require('readline-sync');

let boarddisplay: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

function Board(){

    console.log('TIC-TAC-TOE');
    

    console.log(
        `
        ${boarddisplay[0][0]} || ${boarddisplay[0][1]} || ${boarddisplay[0][2]}
    ------------------
        ${boarddisplay[1][0]} || ${boarddisplay[1][1]} || ${boarddisplay[1][2]}
    ------------------
        ${boarddisplay[2][0]} || ${boarddisplay[2][1]} || ${boarddisplay[2][2]}
        `
    );
    
}

// console.log(Board());

let gameStart: boolean = true;

function inputTakenFromUser(){
    const turn = +input.question("Enter a number from 1 - 9: ");
    console.log(`You have enter ${turn}.`);

    // if(turn !== number){
    //     console.log('You donot enter number');
    //     inputTakenFromUser();
    // }
}

while(gameStart){
    inputTakenFromUser()
}
