import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  font-size: 4em;
  font-weight: bold;
  margin-top: 0.2em;
  @media (max-width: 768px) {
    font-size: 2.25em;
    margin-top: 0.35em;
  }
`;

const ParagraphStyle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Header = () => {
  return (
    <>
    <HeaderStyle>Lavender Hill Properties</HeaderStyle>
    <p><ParagraphStyle>Providing safe, affordable housing in Milwaukee since 1997</ParagraphStyle></p>
    </>
  );
}

export default Header;