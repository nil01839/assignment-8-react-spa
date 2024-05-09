import React, { useEffect, useState } from 'react';
import './Details.css'
import Exercise from '../Exercise/Exercise';
import Report from '../Report/Report';

const Details = () => {
    const [exercises, setExercises] = useState([]);
    const [report, setReport] = useState([]);

    useEffect(()=>{
        fetch('equipments.json')
        .then(res => res.json())
        .then(data =>setExercises(data))
    },[])

    const handleAddToReport = (exercise) =>{
        // console.log(exercise);
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
            <div className="report-container">
                <Report report={report}></Report>
            </div>
        </div>
    );
};

export default Details;