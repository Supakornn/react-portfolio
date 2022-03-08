import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";
import img1 from "../../assets/edupic/wichai.jpg";
import img2 from "../../assets/edupic/deb.jpg";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid #f5af19;
`;

const Box = styled.p`
  height: fit-content;
  background-image: linear-gradient(135deg, #dfe9f3 10%, #ffffff 100%);
  color: black;
  padding: 1rem;
  postion: relative;

  img {
    width: 150px;
    height: 100px;
    margin: 20px;
  }
`;

const EducationItem = ({ title, subtext, img, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <img src={img} />
          <SubTitle>{title}</SubTitle>
          <Text>
            <Typewriter
              options={{
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter.typeString(`<span>${subtext}</span>`).pauseFor(2000).deleteAll().start();
              }}
            />
          </Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  color: #ff4e00;
  margin: 0 20px;
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 20px;
  span {
    font-size: 1.5rem;
    background-image: linear-gradient(135deg, #009ffd 10%, #2a2a72 100%);
    color: black;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
  }
`;

const Educations = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0"
        },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top centert+=200px",
            end: "bottom center",
            scrub: true
          }
        }
      );
    });
    return () => {};
  }, []);

  return (
    <Section id="education">
      <Title>Education</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <EducationItem
            addToRef={addToRefs}
            title="Primary School"
            subtext="WichaiWittaya School"
            img={img1}
          />
          <EducationItem
            addToRef={addToRefs}
            title="Middle School"
            subtext="Debsirin School"
            img={img2}
          />
          <EducationItem
            addToRef={addToRefs}
            title="High School"
            subtext="Debsirin School"
            img={img2}
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Educations;
