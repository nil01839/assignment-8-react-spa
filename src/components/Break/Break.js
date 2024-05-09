import React from 'react';
import './Break.css'

const Break = ({ setBreaks }) => {
    const breakTimes = [10 , 20, 30, 40];
    return (
        
        <div >
            <h3>Add a Break</h3>
            <div className="breaks">
                {breakTimes.map(item=>(
                    <button onClick={() => { setBreaks(item) }} >{item}</button>
                ))}
                
                
                
                {/* <button>{breaks.break1}</button>
                <button>{breaks.break2}</button>
                <button>{breaks.break3}</button>
                <button>{breaks.break4}</button> */}
                {/* <p>{breaks.break1}s</p>
                <p>{breaks.break2}s</p>
                <p>{breaks.break3}s</p>
                <p>{breaks.break4}s</p> */}
            </div>
        </div>
    );
};

export default Break;