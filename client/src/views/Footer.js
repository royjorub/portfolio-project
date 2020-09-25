import React, { useState, useEffect } from 'react';

import ThankYouAnimation from '../components/ThankYouAnimation'


const Footer = (props) => {

    return (
        <div className="container-footer">
            <div class="topnav" id="myTopnav">
                <div class="menu-links">
                    {/* Change contact information below */}
                    <a href="https://docs.google.com/document/d/118XOT90Vu0z7CnojyWOSlOugpJUEvuqfruH6StdXM1c" target="_blank">Resume</a>
                    <a href="mailto:pabarnard@outlook.com" target="_blank">Email</a>
                    <a href="https://github.com/pbarnard1" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;