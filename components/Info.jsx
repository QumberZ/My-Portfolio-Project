import React, { useRef }  from 'react'
import { useSpring, animated } from "react-spring";
import "./text.css";


 function Info() {
    const cardTitle = "About Me!";
    const cardDescription =
      "Computer Science major at the College of Staten Island, Aspiring to be a Cyber Security Analyst / Software Developer";
  
    // Define animation properties for the card
    const cardAnimationProps = useSpring({
      from: { opacity: 0, transform: "scale(0.8)" },
      to: { opacity: 1, transform: "scale(1)" },
    });
  
  return (


    <div>
       <animated.div
                  style={cardAnimationProps}
                  className="animated-card2"
                >
                  <h2>{cardTitle}</h2>
                  <p>{cardDescription}</p>
                </animated.div>
         <animated.div
                  style={cardAnimationProps}
                  className="animated-card"
                >
                  <h2>{cardTitle}</h2>
                  <p>{cardDescription}</p>
                </animated.div>
               
    </div>



  )
}

export default Info;