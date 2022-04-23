import { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { Link } from "./Link";

import "./styles.css";

export const Navigation = () => {
  const [isActive, setIsActive] = useState("#");

  function handleIsActive(hrfe: string) {
    setIsActive(hrfe);
  }

  return (
    <nav>
      <Link
        hrfe="#"
        handleIsActive={handleIsActive}
        isActive={isActive}
        icon={AiOutlineHome}
      />

      <Link
        hrfe="#about"
        handleIsActive={handleIsActive}
        isActive={isActive}
        icon={AiOutlineUser}
      />

      <Link
        hrfe="#experience"
        handleIsActive={handleIsActive}
        isActive={isActive}
        icon={BiBook}
      />

      <Link
        hrfe="#projects"
        handleIsActive={handleIsActive}
        isActive={isActive}
        icon={AiOutlineProject}
      />

      <Link
        hrfe="#contact"
        handleIsActive={handleIsActive}
        isActive={isActive}
        icon={BiMessageSquareDetail}
      />

    </nav>
  );
};
