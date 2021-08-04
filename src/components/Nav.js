import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import StyledLink from './NavStyle';

/*
const NavStyle = styled.nav`
	display: flex;
	flex-direction: column;
	
`;

const ListStyle = styled.ul`
	list-style-type: none;
	color: tomato;
`;

const LinkStyle = styled.li`
	font-weight: bold;
	text-decoration: none;
	
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
*/

const NavStyle = styled.nav`
	height: 85px;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const NavListStyle = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
	color: 'tomato',
	fontWeight: "bold",
	fontSize: "1.2em",
};

const Nav = () => (
  <nav><NavStyle>
		<ul><NavListStyle>
			<li><Link to="/" style={linkStyle}>Home</Link></li>
			<li><Link to="/about" style={linkStyle}>About</Link></li>
			<li><Link to="/properties" style={linkStyle}>Properties</Link></li>
			<li><Link to="/contact" style={linkStyle}>Contact</Link></li>
		</NavListStyle></ul>
	</NavStyle></nav>
);

export default Nav;