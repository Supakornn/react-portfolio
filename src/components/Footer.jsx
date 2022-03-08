import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";
import Twitter from "../Icons/Twitter";
const Section = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 75%;
  margin: 2em auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;
  }

  a:hover {
    transform: scale(1.2);
  }
`;
const MenuItem = styled.ul`
  list-style-type: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: #f12711;
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
const Buttom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }
`;
const Footer = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };
  return (
    <Section id="footer">
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="https://www.facebook.com/spkngap/" target="_blank" rel="noopener">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/supakornigm/" target="_blank" rel="noopener">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/supakornieamgomol/" target="_blank" rel="noopener">
              <LinkedIn />
            </a>
            <a href="https://twitter.com/H3xtT" target="_blank" rel="noopener">
              <Twitter />
            </a>
          </IconList>
        </Left>
        <MenuItem>
          <Item onClick={() => scrollTo("nav")}>Home</Item>
          <Item onClick={() => scrollTo("about")}>About</Item>
          <Item onClick={() => scrollTo("education")}>Educations</Item>
          <Item onClick={() => scrollTo("certificates")}>Certificates</Item>
          <Item onClick={() => scrollTo("projects")}>Projects</Item>
        </MenuItem>
      </Container>
      <Buttom>
        <span>&copy; {new Date().getFullYear()} Supakorn.dev, All rights reserved.</span>
        <span>
          Made with &#10084; by{" "}
          <a href="http://github.com/H3X-T" target="_blank" rel="noopener">
            Supakorn
          </a>
        </span>
      </Buttom>
    </Section>
  );
};

export default Footer;
