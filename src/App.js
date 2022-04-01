import Intro from "./pages/intro/intro"
import "./App.css"
import NavBar from "./components/NavBar";
import About from "./pages/about/about"
import Projects from "./pages/projects/projects";
import Education from "./pages/education/education";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Experience from "./pages/experiences/experiences";
import Skills from "./pages/skills/skills";
import { useEffect, useRef, useState } from "react";

function App() {
  const itemRef = useRef(null);
  const [value, setValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  }

  useEffect(() => {
    if (itemRef && itemRef.current) {
      window.scrollTo({
        top: itemRef.current.offsetTop,
        behavior: "smooth",
      })
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar value={value} handleChange={handleChangeTab} />
      <div ref={value === 0 ? itemRef : null}>
        <Intro />
      </div>
      <div ref={value === 1 ? itemRef : null}>
        <About />
      </div>
      <div ref={value === 2 ? itemRef : null}>
        <Education />
      </div>
      <div ref={value === 3 ? itemRef : null}>
        <Experience />
      </div>
      <Skills />
      <div ref={value === 4 ? itemRef : null} >
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
