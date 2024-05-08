import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const{category, name, time, img} = props.exercise;
    console.log(props.exercise)
    return (
        <div className='exercise'>
            <img src={img} alt="" />
            <div className="exercise-info">
                <h4 className='exercise-name'>{name}</h4>
                <p>Category: {category}</p>
                <p>Time: {time}s</p>

            </div>
        </div>
    );
};

export default Exercise;