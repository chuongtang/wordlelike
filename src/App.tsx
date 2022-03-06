import { useState, useEffect } from 'react';
import Description from './components/IntroRules';
import Form from "./components/Form";
import PlayAgain from "./components/PlayAgain";
import Attemps from "./components/Attemps";
import LevelSelector from "./components/LevelSelector";
import answers from "./answers/answerkey.json";
// import AzureAuthenticationButton from './azure/azure-authentication-component'
import words from './answers/words'
import { AccountInfo } from "@azure/msal-browser";
import './App.css'

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import SignInSignOutButton from './azure/SignInSignOutButton';

type AppProps = {
  pca: IPublicClientApplication
};

function App({ pca }: AppProps) {



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
      {/* <AzureAuthenticationButton onAuthenticated={onAuthenticated} /> */}
      <MsalProvider instance={pca}>
        <SignInSignOutButton />
        <LevelSelector />
        <Description />
        <Form attemps={attemps} setAttemps={setAttemps} />
        <Attemps attemps={attemps} answer={answer} />
        {currentUser && (
          <div>
            <PrettyPrintJson data={currentUser} />
            <ShowPermissionRevokeLinks />
          </div>
        )}
      </MsalProvider>
    </div>
  )
}

export default App
