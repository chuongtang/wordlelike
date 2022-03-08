import { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext'

export interface AttempsProps {
  attemps: string[];
  answer: string;
}

const setBackgroundColor = (
  attemp: string,
  index: number,
  key: string
): string => {
  if (key[index] === attemp[index]) {
    return "bg-green";
  }

  const countOccuringInAnswer = key
    .split("")
    .filter((letter: string) => letter === attemp[index]).length;

  const occuringInAttempBeforeCurrentIdx = attemp
    .slice(0, index)
    .split("")
    .filter((letter: string) => letter === attemp[index]).length;

  if (
    key.includes(attemp[index]) &&
    countOccuringInAnswer >
    occuringInAttempBeforeCurrentIdx
  ) {
    return "bg-yellow";
  }

  return "bg-gray"
};

const Attemps: React.FC<AttempsProps> = ({ attemps, answer }) => {

  const { level } = useContext(AppContext);
  
  return (
    <ol className="place-self-center">
      {attemps.map((attemp, attempIndex) => (
        <li key={attempIndex} style={{display:'grid', gridTemplateColumns: `repeat(${level}, minmax(0, 1fr))`}}>
          {attemp.split("").map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={`${setBackgroundColor(
                attemp,
                letterIndex,
                answer
              )} attempBox doodle-border`}
            >
              {letter}
            </span>
          ))}
        </li>
      ))}
    </ol>
  );
};

export default Attemps;