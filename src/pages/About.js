import React from "react";
import styled from 'styled-components';

const AboutPageStyle = styled.div`
  display: flex;
  flex-direction: row;
	width: 100%;
`;

const ParagraphStyle = {
  display: "flex",
  flexDirection: "column",
  width: "60%",
  margin: "15px",
  textStyle: "justify",
  lineHeight: "1.4em",
  textAlign: "justify",
}

const AboutImg = {
  display: "flex",
  flexDirection: "row",
  width: "30%",
  borderRadius: "25px",
};

const About = () => {
  return (
    <>
    <h1 style={{color:"#CD7F32"}}>About the Owner</h1>
    <div><AboutPageStyle>
      <p style={ParagraphStyle}>Lavender Hill Properties owner Scot E. Henry is a Milwaukee native who has been providing apartment housing at fair rents to area residents since 1997. Scot grew up in Brookfield, WI and moved to the city of Milwaukee while in college. Scot holds a Bachelor's degree in Information Systems from University of Wisconsin-Milwaukee and works as an IT Manager. He is also an active member of the First Unitarian Society of Milwaukee. Whether handling IT issues or tenant requests, Scot and his property managers strive to deliver fast and friendly service.</p>
      <img style={AboutImg} alt="Scot Henry" src="images/scot_henry.jpg" />
    </AboutPageStyle></div>
    </>
  );
}

export default About;