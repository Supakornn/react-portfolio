import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import img1 from "../../assets/c1.png";
import img2 from "../../assets/c2.png";
import img3 from "../../assets/c3.png";
import img4 from "../../assets/c4.png";
import img5 from "../../assets/c5.png";
import img6 from "../../assets/c6.png";
import img7 from "../../assets/c7.png";
import img8 from "../../assets/c8.png";
import img9 from "../../assets/c9.png";
import img10 from "../../assets/c10.png";
import img11 from "../../assets/c11.png";
import img12 from "../../assets/c12.png";
import img13 from "../../assets/c13.png";
import img14 from "../../assets/c14.png";
import img15 from "../../assets/c15.png";
import img16 from "../../assets/c16.png";
import img17 from "../../assets/c17.png";
import img18 from "../../assets/c18.png";
import img19 from "../../assets/c19.png";
import img20 from "../../assets/c20.png";
import img21 from "../../assets/c21.png";
import img22 from "../../assets/c22.png";
import img23 from "../../assets/c23.png";
import img24 from "../../assets/c24.png";
import img25 from "../../assets/c25.png";
import img26 from "../../assets/c26.png";
import img27 from "../../assets/c27.png";
import img28 from "../../assets/c28.png";
import img29 from "../../assets/c29.png";
import img30 from "../../assets/c30.png";
import img31 from "../../assets/c31.png";
import img32 from "../../assets/c32.png";
import img33 from "../../assets/c33.png";
import img34 from "../../assets/c34.png";
import img35 from "../../assets/c35.png";
import img36 from "../../assets/c36.png";
import img37 from "../../assets/c37.png";
import img38 from "../../assets/c38.png";
import img39 from "../../assets/c39.png";
import img40 from "../../assets/c40.png";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  & > *:nth-of-type(2n + 1) {
    animation-duration: 20s;
  }
  & > *:nth-of-type(2n) {
    animation-duration: 15s;
  }
`;

const move = keyframes`
0%{transform: translateX(100%)};
100%{transform: translateX(-100%)};
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2em 0;
  display: flex;

  animation: ${move} 20s linear infinite ${(props) => props.direction};
`;

const ImageContainer = styled.div`
  width: 15rem;
  height: 10rem;
  margin: 0 1rem;
  background-color: ${(props) => props.body};
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
const CertItem = ({ img, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };
  return (
    <ImageContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="TTT" />
    </ImageContainer>
  );
};

const Certificates = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section>
      <Row direction="none" ref={Row1Ref}>
        <CertItem img={img1} passRef={Row2Ref} />
        <CertItem img={img2} passRef={Row2Ref} />
        <CertItem img={img3} passRef={Row2Ref} />
        <CertItem img={img4} passRef={Row2Ref} />
        <CertItem img={img5} passRef={Row2Ref} />
        <CertItem img={img6} passRef={Row2Ref} />
        <CertItem img={img7} passRef={Row2Ref} />
        <CertItem img={img8} passRef={Row2Ref} />
        <CertItem img={img9} passRef={Row2Ref} />
        <CertItem img={img10} passRef={Row2Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <CertItem img={img11} passRef={Row2Ref} />
        <CertItem img={img12} passRef={Row2Ref} />
        <CertItem img={img13} passRef={Row2Ref} />
        <CertItem img={img14} passRef={Row2Ref} />
        <CertItem img={img15} passRef={Row2Ref} />
        <CertItem img={img16} passRef={Row2Ref} />
        <CertItem img={img17} passRef={Row2Ref} />
        <CertItem img={img18} passRef={Row2Ref} />
        <CertItem img={img19} passRef={Row2Ref} />
        <CertItem img={img20} passRef={Row2Ref} />
      </Row>
      <Row direction="none" ref={Row2Ref}>
        <CertItem img={img21} passRef={Row2Ref} />
        <CertItem img={img22} passRef={Row2Ref} />
        <CertItem img={img23} passRef={Row2Ref} />
        <CertItem img={img24} passRef={Row2Ref} />
        <CertItem img={img25} passRef={Row2Ref} />
        <CertItem img={img26} passRef={Row2Ref} />
        <CertItem img={img27} passRef={Row2Ref} />
        <CertItem img={img28} passRef={Row2Ref} />
        <CertItem img={img29} passRef={Row2Ref} />
        <CertItem img={img30} passRef={Row2Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <CertItem img={img31} passRef={Row2Ref} />
        <CertItem img={img32} passRef={Row2Ref} />
        <CertItem img={img33} passRef={Row2Ref} />
        <CertItem img={img34} passRef={Row2Ref} />
        <CertItem img={img35} passRef={Row2Ref} />
        <CertItem img={img36} passRef={Row2Ref} />
        <CertItem img={img37} passRef={Row2Ref} />
        <CertItem img={img38} passRef={Row2Ref} />
        <CertItem img={img39} passRef={Row2Ref} />
        <CertItem img={img40} passRef={Row2Ref} />
      </Row>
    </Section>
  );
};

export default Certificates;
