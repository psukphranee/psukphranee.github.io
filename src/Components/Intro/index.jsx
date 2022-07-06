import './index.scss'
<<<<<<< HEAD
import selfie from '../../images/logo_white.png'
=======
import selfie from '../../images/self_1.jpg'
>>>>>>> master
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const Intro = (props) => {

    var test = props.bio;
    console.log(test);

    const textRef = useRef();

    return(
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={selfie} alt="selfie"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Panya Sukphranee</h1>
<<<<<<< HEAD
                    <h3>Mathematics</h3>
=======
                    <h3>Mathematics | <span>Web Development</span></h3>
>>>>>>> master
                    <span ref={textRef}></span>
                </div>
                <a href="#projects">
                    <ExpandMoreIcon className="img"/>
                </a>
            </div>
        </div>
    )
}

export default Intro