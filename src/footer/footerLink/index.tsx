interface FooterLinkProps {
  nome: string;
  href: string;
  handleIsActive: (value: string) => void;
}

const FooterLink = ({
  nome,
  href,
  handleIsActive,
}: FooterLinkProps) => {
  return (
    <li>
      <a href={href} onClick={() => handleIsActive(href)}>
        {nome}
      </a>
    </li>
  );
};

export default FooterLink;
