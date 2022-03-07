import { useState, useEffect, useContext } from 'react';
import IntroRules from './components/IntroRules';
import Form from "./components/Form";
import PlayAgain from "./components/PlayAgain";
import Attemps from "./components/Attemps";
import LevelSelector from "./components/LevelSelector";
import answers from "./answers/answerkey.json";
import AppContext from './context/AppContext'
import words from './answers/words'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import './App.css'

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import SignInSignOutButton from './azure/SignInSignOutButton';
import { AppContextProvider } from './context/AppContext';

type AppProps = {
  pca: IPublicClientApplication
};

function App({ pca }: AppProps) {

  const { level } = useContext(AppContext);
  const [showLevel, setShowLevel] = useState<number>(3);

  useEffect(() => {
    console.log("Level in App", level)
    setShowLevel(level);

  }, [level]);

  console.log(words(4))
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
      <MsalProvider instance={pca}>
        <SignInSignOutButton />
        <h1 className="text-center">WordleLike</h1>
        <p className="text-center">How many words can you wordle in this wordleLike game of wordle?</p>
        <p className="text-center">( kinda like Tongue Twisters 😛 eh?)</p>
        <AuthenticatedTemplate>
          <LevelSelector />
        </AuthenticatedTemplate>
        <h1>Level set to {showLevel}</h1>
        <IntroRules />
        <Form attemps={attemps} setAttemps={setAttemps} />
        <Attemps attemps={attemps} answer={answer} />
      </MsalProvider>
    </div>
  )
}

export default App
