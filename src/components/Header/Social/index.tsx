import {BsLinkedin, BsGithub} from "react-icons/bs"
import { useGithub } from "../../hooks/useGithub";

export const Social = () => {
  const { user } = useGithub();

  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/otto-neto/" target="_blank">
        {<BsLinkedin />}
      </a>
      <a href={user.html_url} target="_blank">
        {<BsGithub />}
      </a>
    </div>
  );
};
