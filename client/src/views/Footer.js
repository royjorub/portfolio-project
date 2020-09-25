import React, { useState, useEffect } from 'react';

import ThankYouAnimation from '../components/ThankYouAnimation'


const Footer = (props) => {

    return (
        <div className="container-footer">
            <div class="topnav" id="myTopnav">
                <div class="menu-links">
                    {/* Change contact information below */}
                    <a href="#">Resume</a>
                    <a href="mailto: tural.tech@gmail.com">Email</a>
                    <a href="https://github.com/thasanli">GitHub</a>
                    <a href="https://www.linkedin.com/in/tural-hasanli-90910a118/">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;