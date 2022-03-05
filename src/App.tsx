import { useState, useEffect } from 'react';
import Description from './components/IntroRules';
import Form from "./components/Form";
import PlayAgain from "./components/PlayAgain";
import Attemps from "./components/Attemps";
import LevelSelector from "./components/LevelSelector";
import answers from "./answers/answerkey.json";
import AzureAuthenticationButton from './azure/azure-authentication-component'
import words from './answers/words'
import { AccountInfo } from "@azure/msal-browser";
import './App.css'


function App() {

  // current authenticated user
  const [currentUser, setCurrentUser] = useState<AccountInfo>();

  // authentication callback
  const onAuthenticated = async (userAccountInfo: AccountInfo) => {
    setCurrentUser(userAccountInfo);
  };

  // Render JSON data in readable format
  const PrettyPrintJson = ({ data }: any) => {
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };

   // Quick link - user revokes app's permission
   const ShowPermissionRevokeLinks = () => {
    return (
      <div>
        <div><a href="https://myapps.microsoft.com" target="_blank" rel="noopener">Revoke AAD permission</a></div>
        <div><a href="https://account.live.com/consent/manage" target="_blank" rel="noopener">Revoke Consumer permission</a></div>
      </div>
    );
  };


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
      <AzureAuthenticationButton onAuthenticated={onAuthenticated} />
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
    </div>
  )
}

export default App
