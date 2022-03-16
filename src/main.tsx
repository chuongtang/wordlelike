import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import './doodleStyle/doodle.css'
import App from './App'
import { AppContextProvider } from './context/AppContext'

// MSAL imports
// import { PublicClientApplication, EventType, EventMessage, AuthenticationResult } from "@azure/msal-browser";
// import { msalConfig } from "./azure/authConfig";

// export const msalInstance = new PublicClientApplication(msalConfig);

// Account selection logic is app dependent. Adjust as needed for different use cases.
// const accounts = msalInstance.getAllAccounts();
// if (accounts.length > 0) {
//   msalInstance.setActiveAccount(accounts[0]);
// }

// msalInstance.addEventCallback((event: EventMessage) => {
//   if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
//     const payload = event.payload as AuthenticationResult;
//     const account = payload.account;
//     msalInstance.setActiveAccount(account);
//   }
// });


ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
