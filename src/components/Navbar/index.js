// components/Navbar/index.js

import React from "react";
import headshot from './aiheadshot.JPG';
import githubLogo from './githublogo.png';
import linkedLogo from './linkedinlogo.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo,
    MiniLogo,
    NavName,
    NavLine,
    NavPersonalInfo
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
            <Logo src={headshot} alt="Logo" />
            <a href="https://github.com/chrislamvt" target="_blank" rel="noopener noreferrer">
                    <MiniLogo src={githubLogo} alt="GitHub Logo" right={200} />
                </a>
                <a href="https://www.linkedin.com/in/chris-lam-72b814317/" target="_blank" rel="noopener noreferrer">
                    <MiniLogo src={linkedLogo} alt="LinkedIn Logo" right={150} />
                </a>
            <NavName>Chris Lam</NavName>
            <NavPersonalInfo>Software Developer | (703)-627-0500 | chrisla0604@gmail.com</NavPersonalInfo>
                <NavLine />
                <Bars />
                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    {/*
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    */}
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};


export default Navbar;
