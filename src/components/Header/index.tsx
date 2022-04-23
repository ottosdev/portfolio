import { Social } from "./Social";
import "./styles.css";
import { MdArrowRight } from "react-icons/md";
import { Cta } from "./Cta";
import { useGithub } from "../hooks/useGithub";

const Header = () => {
  const { user } = useGithub();
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h2>{user.name}</h2>
        <h5 className="text-light">Desenvolvedor frontend</h5>
        <Cta />
        <Social />
        <div className="header__img">
          <img src={user.avatar_url} alt="Foto github" />
        </div>

        <a href="#contact" className="header__scroll">
          <MdArrowRight size={32}/>
        </a>
      </div>
    </header>
  );
};

export default Header;
