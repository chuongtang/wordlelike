import { useState, useEffect } from "react";
import { useMsal, useAccount } from "@azure/msal-react";

export const SignOutButton = () => {
    const { instance } = useMsal();
    const [userDetail, setUserDetail] = useState();
    // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);

    // Display signed in userDetail

    const { accounts } = useMsal();
    const account = useAccount(accounts[0] || {});
    const [name, setName] = useState("");

    useEffect(() => {
        if (account && account.name) {
            setName(account.name.split(" ")[0]);
        } else {
            setName("");
        }
    }, [account]);

    const handleLogout = (logoutType: string) => {
        // setAnchorEl(null);

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
            {name? <span> <em>Hello {name}, welcome to wordleLike 👋 </em></span>: <span>Welcome wordleLiker</span>}
            
            <button
                onClick={() => handleLogout("popup")}
                className="doodle float-right"
            >
                Sign Out
            </button>
        
        </div>
    )
};