// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #1a1e23;
    height: 85px;
    display: flex;
    justify-content: flex-end;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    /* Third Nav */
    /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
    color: #ffffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #999ea2;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    position: absolute;
    top: 45px; /* Adjust this value to move the buttons down */
    right: 300px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Make the image circular */
  position: absolute;
  top: 10px; /* Adjust as needed */
  left: 100px; /* Adjust as needed */
`;

export const MiniLogo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%; /* Make the image circular */
    position: absolute;
    top: 25px; /* Adjust as needed */
    right: ${props => props.right}px; 
`;

export const NavName = styled.span`
    font-size: 35px;
    color: #ffffff; /* Adjust color as needed */
    position: absolute;
    left: 225px; /* Adjust as needed */
    top: 20px; /* Adjust as needed */
`;

export const NavPersonalInfo = styled.span`
    font-size: 20px;
    color: #999ea2; /* Adjust color as needed */
    position: absolute;
    left: 225px; /* Adjust as needed */
    top: 70px; /* Adjust as needed */
`;

export const NavLine = styled.div`
    width: 90%;
    height: 2px;
    background-color: #999ea2;
    margin-left: 10px;
    position: absolute;
    left: 4%;
    top: 120px;
    transform: translateY(-50%);
`;

