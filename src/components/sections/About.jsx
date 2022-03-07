import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
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

const About = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          {/* <Title>
            About Me
            <SubText></SubText>
          </Title> */}
        </Box>
      </Container>
    </Section>
  );
};

export default About;
