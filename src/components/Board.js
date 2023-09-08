import Box from "./Box";
import "./Board.css"

export default function Board({ board, onClick }) {

    return (
        <div className='board'>
            {board.map((value, index) => (
                // Passes the value and onClick function to the Box component//
                <Box key={index} value={value} onClick={() => value === null && onClick(index)} />
            ))}
        </div>
    );
}