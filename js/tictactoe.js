"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Kristina - 2026-03-26
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";
let winner = false;

//Some of your epic battles:
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];
// const BATTLEFIELD =
//      [
//          [null, X, X],
//          [X, O, null],
//          [O, O, O],
//      ];
// const BATTLEFIELD =
//      [
//          [O, O, X],
//          [X, O, X],
//          [O, X, X],
//      ];
// const BATTLEFIELD =
//      [
//          [O, X, X],
//          [X, O, X],
//          [O, X, O],
//      ];
//
// const BATTLEFIELD =
//      [
//          [O, X, X, X],
//          [X, O, X, O],
//          [O, X, O, X],
//          [X, O, X, X],
//      ];
//const BATTLEFIELD =
//      [
//          [O, X, X, X, null],
//          [X, O, X, O, O],
//          [O, X, O, null,  X],
//          [X, null, X, O, O],
//          [X, null, O, X, O],
//      ];

//TODO: Check if the battle is over, and if so, announce the winner!
const N = BATTLEFIELD.length;

// Check Horizontal
for (let row of BATTLEFIELD) {
    let allEqual = true;
    if (row[0] === null) continue;
    for (let i = 1; i < row.length; i++) {
        if (row[i] !== row[0]) {
            allEqual = false;
            break;
        }
    }
    if (allEqual) {
        console.log(row[0] + " wins horizontally!");
        winner = true;
    }
}

// Check Vertical
for (let col = 0; col < BATTLEFIELD.length; col++) {
    let allEqual = true;
    if (BATTLEFIELD[0][col] === null) continue;
    for (let row = 1; row < BATTLEFIELD.length; row++) {
        if (BATTLEFIELD[row][col] !== BATTLEFIELD[0][col]) {
            allEqual = false;
            break;
        }
    }
    if (allEqual) {
        console.log(BATTLEFIELD[0][col] + " wins vertically!");
        winner = true;
    }
}

// Check Main Diagonal
let allEqual = true;
if (BATTLEFIELD[0][0] === null) allEqual = false;
for (let i = 1; i < BATTLEFIELD.length; i++) {
    if (BATTLEFIELD[i][i] !== BATTLEFIELD[0][0]) {
        allEqual = false;
        break;
    }
}
if (allEqual) console.log(BATTLEFIELD[0][0] + " wins on the main diagonal!"); winner = true;

// Check Anti Diagonal

let allEqualAnti = true;
if (BATTLEFIELD[0][N-1] === null) allEqualAnti = false;
for (let i = 1; i < N; i++) {
    if (BATTLEFIELD[i][N-1-i] !== BATTLEFIELD[0][N-1]) {
        allEqualAnti = false;
        break;
    }
}
if (allEqualAnti) {
    console.log(BATTLEFIELD[0][N - 1] + " wins on the anti diagonal!");
    winner = true;
}


// no winner
if (winner != true) console.log("No winner yet!");
