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
import Confetti from 'react-confetti'

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import SignInSignOutButton from './azure/SignInSignOutButton';
import { AppContextProvider } from './context/AppContext';

type AppProps = {
  pca: IPublicClientApplication
};

const App = ({ pca }: AppProps) => {

  const { level } = useContext(AppContext);
  const answer = words(level);
  const [key, setKey] = useState<string>("win")
  const [attemps, setAttemps] = useState<string[]>([]);

  useEffect(() => {
    setKey(answer);

    // reset the attemps grid when level changed
    setAttemps([])
  }, [level]);


  const isWinner = attemps.length > 0 && attemps[attemps.length - 1] === key;
  if (isWinner) {
    return (
      <>
        <Confetti />
        <PlayAgain attemps={attemps} answer={key}>
          You Won🥇🏆!
        </PlayAgain>
      </>
    );
  }

  const isLoser = attemps.length >= level && attemps[attemps.length - 1] !== key;
  if (isLoser) {
    return (
      <PlayAgain attemps={attemps} answer={key}>
        You Lost🤔!
      </PlayAgain>
    );
  }

  return (
    <div className="grid place-content-center doodle mainBD">
      <MsalProvider instance={pca}>
        <SignInSignOutButton />
        <h1 className="text-center">WordleLike</h1>
        <h2 className="text-center">How many words can you wordle in this wordleLike game of w😛rdle?</h2>
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
