import { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";

export const SignOutButton = () => {
    const { instance } = useMsal();
    const [userDetail, setUserDetail] = useState();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    useEffect(async ()=>{
        const result = await fetch('https://graph.microsoft.com/v1.0/me')
        setUserDetail(result);
    })

    const handleLogout = (logoutType: string) => {
        setAnchorEl(null);

        if (logoutType === "popup") {
            instance.logoutPopup({
                mainWindowRedirectUri: "/"
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect();
        }
    }

    return (
        <div>
            <button
                // onClick={(event) => setAnchorEl(event.currentTarget)}
                onClick={() => handleLogout("popup")}
                color="inherit"
            >
                {/* <AccountCircle /> */}Sign Out
            </button>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
          >
              <MenuItem onClick={() => handleLogout("popup")} key="logoutPopup">Logout using Popup</MenuItem>
              <MenuItem onClick={() => handleLogout("redirect")} key="logoutRedirect">Logout using Redirect</MenuItem>
          </Menu> */}
        </div>
    )
};