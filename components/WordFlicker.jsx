import React, { useEffect, useState } from 'react';
import './styles.css'; // Import the CSS file

const words = [
   'About Me!',
  'I am a Computer Science major at the College of Staten Island',
  'Aspiring to be a Cyber Security Analyst / Software Developer',
  'I like to play Basketball',
  'Workout',
  'and play Video Games!',
];

const WordFlicker = () => {
  const [part, setPart] = useState('');
  let i = 0;
  let offset = 0;
  const len = words.length;
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 15;
  const speed = 70;

  const wordFlick = () => {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skipCount;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      const newPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      setPart(newPart);
    }, speed);
  };

  useEffect(() => {
    wordFlick();
  }, []); // Run the wordFlick function on component mount

  return (
    <div className="word">
      {part}
    </div>
  );
};

export default WordFlicker;
