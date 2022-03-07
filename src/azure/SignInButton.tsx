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
            className="doodle animate-bounce"
        >
            Login 
        </button> <span>to try different levels</span>
    </div>
)
};