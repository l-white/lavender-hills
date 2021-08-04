import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import StyledLink from './NavStyle';

const ListStyle = styled.ul`
	list-style-type: none;
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

const Nav = (props) => (
  <nav>
		<ul><ListStyle>
			<li><StyledLink><Link to="/">Home</Link></StyledLink></li>
			<li><LinkStyle><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></LinkStyle></li>
			<li><LinkStyle><Link to="/properties">Properties</Link></LinkStyle></li>
			<li><LinkStyle><Link to="/contact">Contact</Link></LinkStyle></li>
		</ListStyle></ul>
  </nav>
);

export default Nav;