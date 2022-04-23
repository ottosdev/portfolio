import { IconType } from "react-icons";

interface LinkProps {
  handleIsActive: (value: string) => void;
  isActive: string;
  icon: IconType;
  hrfe: string;
}

export const Link = ({
  hrfe,
  handleIsActive,
  isActive,
  icon: Icon,
}: LinkProps) => {
  return (
    <a
      href={hrfe}
      onClick={() => handleIsActive(hrfe)}
      className={isActive === hrfe ? "active" : ""}
    >
      {<Icon />}
    </a>
  );
};
