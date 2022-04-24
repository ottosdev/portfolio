import { useGithub } from "../components/hooks/useGithub";
import "./styles.css"

export const Footer = () => {
  const {user} = useGithub()

  return (
    <footer id="footer">
      <a target="_blank" href={user.html_url}>{user.name}</a>

      <ul className="links">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </footer>
  );
};
