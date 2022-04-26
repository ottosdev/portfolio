import { useContext } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import Header from "./components/Header";
import { GitHubContextProvider } from "./components/hooks/useGithub";
import { LinkContextProvider } from "./components/hooks/useLink";
import { Navigation } from "./components/Navigation";
import Projects from "./components/projects";
import { Footer } from "./footer";

function App() {
  return (
    <GitHubContextProvider>
      <LinkContextProvider>
        <Header />
        <Navigation />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </LinkContextProvider>
    </GitHubContextProvider>
  );
}

export default App;
