import React from 'react';
import './Exercise.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Exercise = (props) => {
    const {exercise, handleAddToReport} = props;
    const{category, name, time, img} = exercise;
    // console.log(props.exercise)


    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className="exercise-info">
                <h4 className='exercise-name'>{name}</h4>
                <p>Category: {category}</p>
                <p>Time: {time}s</p>

            </div>
            <button onClick={()=>handleAddToReport(exercise)} className='btn-report'>
                <p  className='btn-text'>Add to Report</p>
                <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                </button>
            
        </div>
    );
};

export default Exercise;