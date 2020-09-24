import React, { useState, useEffect } from 'react';

import ThankYouAnimation from '../components/ThankYouAnimation'


const Footer = (props) => {

    return (
        <div className="container-footer">
            <div class="topnav-footer" id="myTopnav-footer">
                <div class="menu-links-footer">
                    {/* Change contact information below */}
                    <a href="mailto: tural.tech@gmail.com">Email</a>
                    <a href="https://github.com/thasanli">GitHub</a>
                    <a href="https://www.linkedin.com/in/tural-hasanli-90910a118/">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;