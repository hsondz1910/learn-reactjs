import React, { useState } from 'react';
import Board from './Board';
import "./GameStyles.css";
import { calculateWinner } from '../../helpers';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null))
    // const [xIsNext, setXIsNext] = useState(true)
    const [state, setState] = useState({
        board: Array(9).fill(null),
        xIsNext: true,
    })
    const winner = calculateWinner(state.board)
    const handleClick = (index) => {
        const boardCopy  = [... state.board]
        if (winner || boardCopy[index]) return;
        boardCopy[index] = state.xIsNext ? 'X' : 'O';
        // setBoard(boardCopy)
        // setXIsNext((xIsNext) => !xIsNext)
        setState({
            board: boardCopy,
            xIsNext: !state.xIsNext,
        })
    };
    const handleResetGame = () => {
        // setBoard(Array(9).fill(null))
        // setXIsNext(true); // set X luôn luôn là đánh dấu đầu tiên dù reset game
        setState({
            ... state,
            board: Array(9).fill(null),
            xIsNext: true,
        })
    };

    return (
        <div>
            <Container>
                <div>
                    {winner && (
                        <Alert className='winner' variant='success'>
                        {winner} is winner!
                        </Alert>
                    )}
                </div>
                <Board cells={state.board} onClick={handleClick}></Board>
                {/* <div className='winner'>
                    {winner ? `Winner is ${xIsNext ? "O" : "X"}` : ""}
                </div> */}
                <Button className='btn-reset' variant="secondary" onClick={handleResetGame}>Reset game</Button>
            </Container>
        </div>
    );
};

export default Game;