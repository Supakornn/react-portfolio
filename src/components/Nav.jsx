import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.li`
  margin: 0 2rem;
  list-style: none;
  font-size: ${(props) => props.theme.fontlg};
  background-image: linear-gradient(60deg, #b92b27, #1565c0);
  color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
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
const Nav = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };
  return (
    <Section id="nav">
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem onClick={() => scrollTo("nav")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("education")}>Educations</MenuItem>
          <MenuItem onClick={() => scrollTo("certificates")}>Certificates</MenuItem>
          <MenuItem onClick={() => scrollTo("projects")}>Projects</MenuItem>
        </Menu>
        <Button text="Support Me" link="https://ko-fi.com/supakorn"></Button>
      </NavBar>
    </Section>
  );
};

export default Nav;
