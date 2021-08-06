import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavStyle = styled.nav`
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const activeStyle = {
	color: "#CD7F32",
};
const linkStyle = {
	margin: "1rem",
	textDecoration: "none",
	color: "maroon",
	fontWeight: "bold",
	fontSize: "1.2em",
};

const Nav = () => (
	<nav><NavStyle>
		<NavLink exact to="/" style={linkStyle} 
		activeStyle={activeStyle}>Home</NavLink>
		<strong>{' | '}</strong>
		<NavLink to="/about" style={linkStyle} 
		activeStyle={activeStyle}>About</NavLink>
		<strong>{' | '}</strong>
		<NavLink to="/properties" style={linkStyle} 
		activeStyle={activeStyle}>Properties</NavLink>
		<strong>{' | '}</strong>
		<NavLink to="/contact" style={linkStyle} 
		activeStyle={activeStyle}>Contact</NavLink>
	</NavStyle></nav>
);

export default Nav;