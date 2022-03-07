import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "mansalva", cursive;
  }

  #text-1 {
    background-image: linear-gradient(60deg, #8500ff, #ff8100);
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
  }
  #text-2 {
    background-image: linear-gradient(60deg, #ff6fd8, #3813c2);
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
  }
  #text-3 {
    background-image: linear-gradient(60deg, #ff0099, #493240);
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
`;
const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
`;
const TypeWriterText = () => {
  return (
    <>
      <Title>
        Hi, Everyone <br /> My name is Supakorn,
        <br /> I am a
        <Typewriter
          options={{
            autoStart: true,
            loop: true
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span id='text-1'>Developer<span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span id='text-2'>Student<span>`)
              .pauseFor(2000)
              .deleteAll()
              .typeString(`<span id='text-3'>Blogger<span>`)
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Welcome to my Website</SubTitle>
      <ButtonContainer>
        <Button text="About Me" link="#about"></Button>
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
