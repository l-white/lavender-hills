import React from "react";

const GetDate = () => {
  return `Copyright ${new Date().getFullYear()}`;
}

const Footer = () => {
  return (
    <p>{GetDate()} By Lavender Hill Properties</p>
    
  );
}

export default Footer;