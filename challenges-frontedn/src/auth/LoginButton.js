import React from "react";

const LoginButton= ()=>{
    const login = async()=> {
        const domain = 'dev-9c3c8d9h.us.auth0.com';
        const audeince = 'https://www.challenges-api.com';
        const scope = 'read:challenges';
        const clientId = '60c7d5f0b7a1cd003fe85436';
        const respinceType = 'code';
        const redirectUrl = 'https://localhost:3000/challenges';

        const response = fetch(
            `https://${domain}/authorize?` +
            `audience=${audeince}&` + 
            `scope=${scope}&` +
            `response_type=${respinceType}&` +
            `client_ids=${clientId}&` +
            `redirect_url=${redirectUrl}`, {
                redirect: 'manual'
            }
        );

        window.location.replace((await response).url);
;    };

    return(
        <button className="Login-button" onClick={()=> login()}>
            log in
        </button>
    );
};

export default LoginButton;