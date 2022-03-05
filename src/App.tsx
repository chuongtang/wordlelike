import { useState, useEffect } from 'react';
import Description from './components/IntroRules';
import Form from "./components/Form";
import PlayAgain from "./components/PlayAgain";
import Attemps from "./components/Attemps";
import LevelSelector from "./components/LevelSelector";
import answers from "./answers/answerkey.json";
import AzureAuthenticationButton from './azure/AzureAuthenticationButton'
import words from './answers/words'

import './App.css'


function App() {
  console.log(words(7))
  const answer = words(6)[Math.floor(Math.random() * words(6).length)];
  // const answer = answers[Math.floor(Math.random() * answers.length)];
  console.log(answer);
  const [attemps, setAttemps] = useState<string[]>([]);

  const isWinner = attemps.length > 0 && attemps[attemps.length - 1] === answer;
  if (isWinner) {
    return (
      <PlayAgain attemps={attemps} answer={answer}>
        You win!
      </PlayAgain>
    );
  }

  return (
    <div className="grid place-content-center doodle">
    <AzureAuthenticationButton />
    <LevelSelector />
    <Description />
    <Form attemps={attemps} setAttemps={setAttemps} />
    <Attemps attemps={attemps} answer={answer} />
  </div>
  )
}

export default App
