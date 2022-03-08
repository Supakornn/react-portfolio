import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
const Confettii = () => {
  const { width, height } = useWindowSize();
  return <Confetti numberOfPieces={150} gravity={0.05} width={width} height={height} />;
};

export default Confettii;
