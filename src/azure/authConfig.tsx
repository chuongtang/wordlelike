import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
const msalID:string = (import.meta.env.VITE_AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID as string);

export const msalConfig: Configuration = {
    auth: {
        clientId: msalID,
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