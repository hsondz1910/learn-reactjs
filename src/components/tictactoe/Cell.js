import React from 'react';

// const props = {
//     value: 'X', 
//     onClick: () => true
// }

const Cell = ({ value, onClick}) => {
    // const { value, onClick } = props
    // console.log(props)

    return (
        <div className='game-cell' onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;