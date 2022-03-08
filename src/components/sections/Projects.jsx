import React from "react";
import styled from "styled-components";
import p1 from "../../assets/aboutpic/1.jpg";
import Confetti from "../Confetti";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  background-image: linear-gradient(135deg, #F6D242 10%, #FF52E5 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #f6416c;
  width: fit-content;
`;

const Container = styled.div`
  width: 85%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: calc(20rem - 4vw);
  cursor: pointer;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid black;
  border-radius: 20px;
  overflow: hidden;

  transition: all 0.3s ease;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.body};
  border-radius: 15px;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  margin-top: 1rem;
`;

const ProjectComponent = ({ img, name = "", subtitle = "", link = "" }) => {
  return (
    <Item onClick={() => window.open(link)}>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Subtitle>{subtitle}</Subtitle>
    </Item>
  );
};
const Projects = () => {
  return (
    <Section>
      <Confetti />
      <Title>Projects</Title>
      <Container>
        <ProjectComponent img={p1} name="p1" subtitle="founder" link="" />
        <ProjectComponent img={p1} name="p1" subtitle="founder" link="" />
        <ProjectComponent img={p1} name="p1" subtitle="founder" link="" />
        <ProjectComponent img={p1} name="p1" subtitle="founder" link="" />
        <ProjectComponent img={p1} name="p1" subtitle="founder" link="" />
        <ProjectComponent img={p1} name="p1" subtitle="founder" link="" />
        <ProjectComponent img={p1} name="p1" subtitle="founder" link="" />
        <ProjectComponent img={p1} name="p1" subtitle="founder" link="" />
        <ProjectComponent img={p1} name="p1" subtitle="founder" link="" />
        <ProjectComponent img={p1} name="p1" subtitle="founder" link="" />
      </Container>
    </Section>
  );
};

export default Projects;
