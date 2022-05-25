import './index.scss'
import selfie from '../../images/santorini.png'
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const Intro = (props) => {

    var test = props.bio;
    console.log(test);

    const textRef = useRef();

    // useEffect(() => {
    //     init(textRef.current, {
    //       showCursor: true,
    //       backDelay: 1500,
    //       backSpeed:60,
    //       strings: ["Developer", "Designer", "Content Creator"],
    //     });
    //   }, []);
    

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
                    <h3>Mathematics | <span>Web Development</span></h3>
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