import React from 'react';
//import {HeaderStyle} from './Header.styles';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  font-size: 4em;
  font-weight: bold;
`;

const Header = () => {
  return (
    <>
    <HeaderStyle>Lavender Hill Properties</HeaderStyle>
    <p>Providing safe, affordable housing in Milwaukee since 1997</p>
    </>
  );
}

export default Header;