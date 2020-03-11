import React from 'react';

import './footer.css';

const Footer = () => {

    return (
        <div className="footer">
            <span>this training application!</span>
            <span>not working on mobile devices</span>
            <span>some functions may not work</span>
            <span>if you have problems with the CORS policy</span>
            <span>and you use google chrome</span>
            <span>install this or similar extension</span>
            <a href="https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc">
                Moesif Orign & CORS Changer
            </a>
            <span>and activate it in the browser</span>
            <span>for the correct operation of the application</span>
        </div>
    );
};

export default Footer;