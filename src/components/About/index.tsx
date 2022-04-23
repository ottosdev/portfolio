import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import {
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaFirefoxBrowser,
} from "react-icons/fa";
// import required modules
import { Pagination } from "swiper";
import { useGithub } from "../hooks/useGithub";
import { BsBuilding } from "react-icons/bs";
import { MdEmail, MdMyLocation } from "react-icons/md";

export const About = () => {
  const { user } = useGithub();

  return (
    <section id="about">
      <h2>Sobre mim</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container about__container"
      >
        <SwiperSlide>
          <article className="about">
            <div className="about_avatar">
              <img
                src="https://avatars.githubusercontent.com/u/57202496?v=4"
                alt=""
              />
            </div>
            <h5 className="title">Biografia</h5>
            <small className="description">{user.bio}</small>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="about">
            <MdMyLocation size={32} color="white"/>

            <h5 className="title">Informações</h5>
            <div className="location">
              <div className="location_content">
                <FaLocationArrow />
                Joao Pessoa, PB
              </div>
              <div className="location_content">
                <BsBuilding />
                Indra Company
              </div>
              <div className="location_content">
                <FaGithub />
                {user.login}
              </div>
              <div className="location_content">
                <MdEmail />
                otto_neto@outlook.com
              </div>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
