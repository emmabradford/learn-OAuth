import React from 'react';

const LogoutButton = ()=> {
    const logout = async ()=> {
        const domain = 'dev-9c3c8d9h.us.auth0.com';
        const clientId = '60c7d5f0b7a1cd003fe85436';
        const returnTo = 'http://localhost:3000';

        const response = await fetch(
            `https://${domain}/logout?client_id=${clientId}&returnTo=${returnTo}`, {
                redirect: "manual"
            }
        );

        window.location.replace(response.url);
    };

    return(
        <button className='Logout-buttin' onClick={()=> logout()}>
            logout
        </button>
    );
};

export default LogoutButton;
