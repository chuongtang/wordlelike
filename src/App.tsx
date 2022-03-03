import { useState, useEffect } from 'react';
import Description from './components/IntroRules';
import Form from "./components/Form";
import PlayAgain from "./components/PlayAgain";
import Attemps from "./components/Attemps";
import answers from "./answers/answerkey.json";
import AzureAuthenticationButton from './azure/AzureAuthenticationButton'

import './App.css'

function App() {
  const answer = answers[Math.floor(Math.random() * answers.length)];
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
    <div className="grid place-items-center">
      <AzureAuthenticationButton />
    <Description />
    <Form attemps={attemps} setAttemps={setAttemps} />
    <Attemps attemps={attemps} answer={answer} />
  </div>
  )
}

export default App
