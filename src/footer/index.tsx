import { useGithub } from "../components/hooks/useGithub";
import { useLink } from "../components/hooks/useLink";
import FooterLink from "./footerLink";
import "./styles.css";



export const Footer = () => {
  const { user } = useGithub();
  const { handleIsActive } = useLink();

  return (
    <footer id="footer">
      <a target="_blank" href={user.html_url}>
        {user.name}
      </a>

      <ul className="links">
        <FooterLink nome="Inicio" href="#" handleIsActive={handleIsActive}/>
        <FooterLink nome="Sobre" href="#about" handleIsActive={handleIsActive}/>
        <FooterLink nome="Experiencias" href="#experience" handleIsActive={handleIsActive}/>
        <FooterLink nome="Projetos" href="#projects" handleIsActive={handleIsActive}/>
        <FooterLink nome="Contato" href="#contact" handleIsActive={handleIsActive}/>
      </ul>
    </footer>
  );
};
