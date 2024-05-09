import React from 'react';
import Exercise from '../Exercise/Exercise';

const Summary = ({report, breaks}) => {
    // console.log(breaks[0])
    let totalTime = 0;
    for(const exercise of report ){
        totalTime = totalTime + exercise.time;
    }


    return (
        <div>
            <h3>Work Out Summary</h3>
            <div className="time-and-break">
                <div>
                    <p>Exercises Time: 
                        {totalTime} seconds
                    </p>
                </div>
                <div>
                    <p>Break Time: {breaks}</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;