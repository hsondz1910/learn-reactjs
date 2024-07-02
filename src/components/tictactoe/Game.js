import React, { useReducer, useState } from 'react';
import Board from './Board';
import "./GameStyles.css";
import { calculateWinner } from '../../helpers';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK':
            {
                // console.log("it's working")
                const { board, xIsNext } = state;
                const { index, winner } = action.payload;
                if (winner || board[index]) return state;
                const nextState = JSON.parse(JSON.stringify(state));

                // boardCopy[index] = state.xIsNext ? 'X' : 'O';
                nextState.board[index] = xIsNext ? 'X' : 'O';
                nextState.xIsNext = !xIsNext;

                return nextState;
            }
        
        case 'RESET':
            {
                const nextState = JSON.parse(JSON.stringify(state));
                nextState.board = Array(9).fill(null);
                nextState.xIsNext = true;

                return nextState;
            }

        default:
            console.log("Error");
            break;
    }
    return state;
}



const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null))
    // const [xIsNext, setXIsNext] = useState(true)
    // const [state, setState] = useState({
    //     board: Array(9).fill(null),
    //     xIsNext: true,
    // })
    
    // const [state, dispatch] = useReducer(reducer, initialState)
    // const action = {type: 'CLICK', payload}
    // dispatch(action) or dispatch({type: 'CLICK'}), needn't to dispatch the function because the value is the object
    // if we have the data, we should put it in the payload value in the object


    const [state, dispatch] = useReducer(gameReducer, initialState)
    const winner = calculateWinner(state.board)
    const handleClick = (index) => {
        // const boardCopy  = [... state.board]
        // if (winner || boardCopy[index]) return;
        dispatch({
            type: 'CLICK',
            payload: {
                index, // index: index,
                winner,
            }
        })
        // boardCopy[index] = state.xIsNext ? 'X' : 'O';
        // setBoard(boardCopy)
        // setXIsNext((xIsNext) => !xIsNext)
        // setState({
        //     board: boardCopy,
        //     xIsNext: !state.xIsNext,
        // })
    };
    const handleResetGame = () => {
        // setBoard(Array(9).fill(null))
        // setXIsNext(true); // set X luôn luôn là đánh dấu đầu tiên dù reset game
        // setState({
        //     ... state,
        //     board: Array(9).fill(null),
        //     xIsNext: true,
        // })
        dispatch({
            type: 'RESET',
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