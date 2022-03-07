import { useState, useEffect, useContext } from 'react';
import IntroRules from './components/IntroRules';
import Form from "./components/Form";
import PlayAgain from "./components/PlayAgain";
import Attemps from "./components/Attemps";
import LevelSelector from "./components/LevelSelector";
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

const App = ({ pca }: AppProps)=> {
  
  const { level } = useContext(AppContext);

  console.log(words(level))
  const answer = words(level);
  // const answer = words(level)[Math.floor(Math.random() * words(6).length)];
  
  console.log(answer);
  const [showLevel, setShowLevel] = useState<number>(3);
  const [key, setKey] = useState<string>("win")

  useEffect(() => {
    // console.log("Level in App", level)
    // setShowLevel(level);
    setKey(answer);

  }, [level]);

  const [attemps, setAttemps] = useState<string[]>([]);

  const isWinner = attemps.length > 0 && attemps[attemps.length - 1] === key;
  if (isWinner) {
    console.log("WINNNING")
    return (
      <PlayAgain attemps={attemps} answer={key}>
        You win!
      </PlayAgain>
    );
  }

  return (
    <div className="grid place-content-center doodle">
      <MsalProvider instance={pca}>
        <SignInSignOutButton />
        <h1 className="text-center">WordleLike key is :{key}</h1>
        <p className="text-center">How many words can you wordle in this wordleLike game of wordle?</p>
        <p className="text-center">( kinda like Tongue Twisters 😛 eh?)</p>
        <AuthenticatedTemplate>
          <LevelSelector />
        </AuthenticatedTemplate>
        <IntroRules />
        <Form attemps={attemps} setAttemps={setAttemps} />
        <Attemps attemps={attemps} answer={key} />
      </MsalProvider>
    </div>
  )
}

export default App
