import { useEffect, useState } from "react";
import { useGithub } from "../hooks/useGithub";
import "./styles.css";

const Projects = () => {
  const { projects } = useGithub();

   return (
    <section id="projects">
      <h5>Meus Projetos</h5>
      <h2>Github</h2>

      <div className="container projetos__container">
        {projects.map((item) => (
          <article className="projetos__item" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div>
              <a
                className="btn btn-primary"
                target="_blank"
                href={item.html_url}
              >
                Github
              </a>
              <h5>{item.languageFormatted}</h5>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
