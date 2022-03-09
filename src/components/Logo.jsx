import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "mansalva", cursive;
  background-image: linear-gradient(60deg, #b92b27, #493240);
  color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const Logo = () => {
  const [click, setClick] = useState(false);
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    setClick(!click);
  };
  return (
    <LogoText>
      <p onClick={() => scrollTo("nav")}>Supakorn.</p>
    </LogoText>
  );
};

export default Logo;
