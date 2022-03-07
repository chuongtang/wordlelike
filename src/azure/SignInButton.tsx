import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

export const SignInButton = () => {
  const { instance } = useMsal();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleLogin = (loginType: string) => {
      setAnchorEl(null);

      if (loginType === "popup") {
          instance.loginPopup(loginRequest);
      } else if (loginType === "redirect") {
          instance.loginRedirect(loginRequest);
      }
  }
  return (
    <div>
        <button
            // onClick={(event) => setAnchorEl(event.currentTarget)}
            onClick={() => handleLogin("popup")}
            color="inherit"
        >
            👩‍💻Login 
        </button> <span>to track your high score and play at different levels</span>
    </div>
)
};