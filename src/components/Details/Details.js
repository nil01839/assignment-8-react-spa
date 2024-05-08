import React, { useEffect, useState } from 'react';
import './Details.css'
import Exercise from '../Exercise/Exercise';

const Details = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(()=>{
        fetch('equipments.json')
        .then(res => res.json())
        .then(data =>setExercises(data))
    },[])

    return (
        <div className='details-container'>
            <div className="exercises-container">
                {
                    exercises.map(exercise => <Exercise 
                        key={exercise.id}
                        exercise = {exercise}
                        ></Exercise>)
                }
            </div>
            <div className="daily-report">
                <h4>Daily Report</h4>
            </div>
        </div>
    );
};

export default Details;