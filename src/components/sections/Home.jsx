import React from "react";
import styled from "styled-components";
import TypeWriterText from "../TypeWriterText";
import CoverPic from "../CoverPic";
const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
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
const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <CoverPic />
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
