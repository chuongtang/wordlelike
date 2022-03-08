import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
// const msalID:string = import.meta.env.VITE_AZURE_APP_CLIENT_ID;

export const msalConfig: Configuration = {
    auth: {
        clientId: '200081a5-4c35-454a-9a5b-96f394f74c3c',
        redirectUri: "/",
        postLogoutRedirectUri: "/"
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
    scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft-ppe.com/v1.0/me"
};