import React, { useState, useEffect } from 'react';
import '../css/Header.css'
import YouTube from 'react-youtube'; // Make sure to do "npm i react-youtube"!


const Header = (props) => {
    return (
        <div className="container">
            <div class="topnav" id="myTopnav">
                <div class="logoDiv">
                    <p>Tural Hasanli</p>
                </div>
                <div class="menu-links">
                    {/* Change the links below as appropriate */}
                    <a href="mailto: tural.tech@gmail.com">Email</a>
                    <a href="https://github.com/thasanli">GitHub</a>
                    <a href="https://www.linkedin.com/in/tural-hasanli-90910a118/">LinkedIn</a>
                </div>
            </div>
            <div>
                <YouTube videoId="2g811Eo7K8U" className="youtube" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fugit sint unde vitae voluptatibus, veritatis, iusto veniam quo libero, voluptatum iure magni. Quis in, enim accusantium eaque veniam officia cum.</p>
            </div>
        </div>
    );
}

export default Header;