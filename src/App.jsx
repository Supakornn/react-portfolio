import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/Theme";
import Nav from "./components/Nav";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Educations from "./components/sections/Educations";
import Certificates from "./components/sections/Certificates";
import Projects from "./components/sections/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Nav />
        <Home />
        <About />
        <Educations />
        <Certificates />
        <Projects />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
