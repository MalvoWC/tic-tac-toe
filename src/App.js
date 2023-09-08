import React, { useState } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";
import "./App.css";


export default function App() {

    // Creates an array with 9 null values and stores it in the board state//
    const [board, setBoard] = useState(Array(9).fill(null));

    // Creates a state to keep track of which player is playing//
    const [xPlaying, setXPlaying] = useState(true);

    // Creates a state to keep track of the scores//
    const [scores, setScores] = useState({xScore: 0, oScore: 0});

    // Creates a state to keep track of the game over status//
    const [gameOver, setGameOver] = useState(false);

    const Win_Conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [2, 4, 6],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    const checkWinner = (board) => {
        for(let i = 0; i < Win_Conditions.length; i++) {
            // Creates a, b, & c variables to check the board array//
            const [a, b, c] = Win_Conditions[i];

            // Checks if the board has a value and if the values are equal//
            if(board[a] && board[a] === board[b] && board[a] === board[c]) {
                setGameOver(true);
                return board[a];
            }
        }
    };


    // Handles the index for which box was clicked and updates the board array//
    const handleBoxClick = (boxIndex) => {
        const updateBoard = board.map((value, index) => {
            if (index === boxIndex) {
                return xPlaying ? "X" : "O";
            }
            else {
                return value;
            }
        });

        // Checks if there is a winner//
         const winner = checkWinner(updateBoard);
         if(winner) {
            if(winner === "O") {
                let { oScore } = scores;
                oScore++;
                setScores({...scores, oScore});
            } else {
                let { xScore } = scores;
                xScore++;
                setScores({...scores, xScore});
            }
         }
        // Updates the board state with the new array//
        setBoard(updateBoard);

        // Updates the xPlaying, so if X is playing, it will be O's turn and vice versa//
        setXPlaying(!xPlaying);
    }

    // Resets the board and game over status//
    const resetBoard = () => {
        setGameOver(false);
        setBoard(Array(9).fill(null));
    }

    return (
        <div className="App">
            <ScoreBoard scores={scores} xPlaying={xPlaying}/>
            <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
            <ResetButton resetBoard={resetBoard}/>
        </div>
    );
}