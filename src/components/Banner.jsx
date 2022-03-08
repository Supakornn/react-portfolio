import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  background-image: linear-gradient(135deg, #243949 10%, #517fa4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.body};
  padding: 1rem 2rem;
  z-index: 10;
  width: 35%;
`;

const BtnContainer = styled.div`
  width: 40%
  display: flex;
  justify-content: flex-end;
  font-size: ${(props) => props.theme.fontlg};
`;

const Banner = () => {
  return (
    <Section>
      <Title>Contact Me</Title>
      <BtnContainer>
        <Button text="Support Me" Link="" />
      </BtnContainer>
    </Section>
  );
};

export default Banner;
