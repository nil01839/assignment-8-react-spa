import React, { useState } from 'react';
import pic from '../../images/pic.jpg'
import './Report.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Niladry from '../Niladry/Niladry';
import Break from '../Break/Break';
import Summary from '../Summary/Summary';

const Report = ({report}) => {
    const [breaks, setBreaks] = useState(0);
    
    return (
        <div className='report'>
            <div className='img-container'>
                <img src={pic} alt="" />
            </div>
            <p>Name: Niladry Ray </p>
            <div className="location">
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                <p className='location-text'><small>Khulna,Bangladesh</small></p>
            
            </div>
            <Niladry></Niladry>
            <Break setBreaks={setBreaks}></Break>
            <Summary 
                report={report}
                breaks={breaks}
                
            ></Summary>
           
        </div>
    );
};

export default Report;