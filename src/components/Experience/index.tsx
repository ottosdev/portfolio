import { BsPatchCheckFill } from "react-icons/bs";
import { FaCss3Alt, FaHtml5, FaReact, FaAngular, } from "react-icons/fa";
import { SiNestjs, SiJavascript } from "react-icons/si";
import "./styles.css";
export const Experience = () => {
  return (
    <section id="experience">
      <h5>Que habilidades eu tenho</h5>
      <h2>Minhas Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__content">
          <h3>FrontEnd</h3>
          <div className="experience__frontend-content">
            <article className="experience__details">
              <FaCss3Alt />
              <small>Css</small>
            </article>
            <article className="experience__details">
              <FaHtml5 />
              <small>Html</small>
            </article>
            <article className="experience__details">
              <FaReact />
              <small>React</small>
            </article>
            <article className="experience__details">
              <FaAngular />
              <small>Angualar</small>
            </article>
            <article className="experience__details">
              <SiJavascript />
              <small>JavaScript</small>
            </article>
          </div>
        </div>
        <div className="experience__content">
          <h3>Backend</h3>
          <div className="experience__frontend-content">
            <article className="experience__details">
              <SiNestjs />
              <small>NestJs</small>
            </article>
            <article className="experience__details">
              <SiJavascript />
              <small>JavaScript</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
