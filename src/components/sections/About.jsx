import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Button from "../Button";
import Typewriter from "typewriter-effect";
const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(135deg, #616161 10%, #243949 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  postion: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.body};
  width: 80%;
  margin: 0 auto;

  span {
    background-image: linear-gradient(135deg, #feb692 10%, #ea5455 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>
            <Typewriter
              options={{
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(`<span id="Title-1">About Me </span>`)
                  .pauseFor(200)
                  .deleteAll()
                  .start();
              }}
            />
          </Title>
          <SubText>
            My name is Supakorn Ieamgomol, Aka H3X-T, Nickname Gap, <br />
            I'm 16 years old, From Thailand.
          </SubText>
          <SubTextLight>I'm Self-Taught Developer, I start learn coding for 1 years.</SubTextLight>
          <Button text="Contact Me" link="https://www.facebook.com/spkngap/" />
        </Box>
      </Container>
    </Section>
  );
};

export default About;
