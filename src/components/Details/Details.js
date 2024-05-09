import React, { useEffect, useState } from 'react';
import './Details.css'
import Exercise from '../Exercise/Exercise';

const Details = () => {
    const [exercises, setExercises] = useState([]);
    const [report, setReport] = useState([]);

    useEffect(()=>{
        fetch('equipments.json')
        .then(res => res.json())
        .then(data =>setExercises(data))
    },[])

    const handleAddToReport = (exercise) =>{
        console.log(exercise);
        const newReport = [...report, exercise];
        setReport(newReport);
    }

    return (
        <div className='details-container'>
            <div className="exercises-container">
                {
                    exercises.map(exercise => <Exercise 
                        key={exercise.id}
                        exercise = {exercise}
                        handleAddToReport = {handleAddToReport}
                        ></Exercise>)
                }
            </div>
            <div className="daily-report">
                <h4>Daily Report</h4>
                <p>Selected Exercises: {report.length}</p>
            </div>
        </div>
    );
};

export default Details;