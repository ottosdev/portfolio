import Resume from "../../../assets/Resume.pdf";

export const Cta = () => {
  return (
    <div className="cta">
        <a href={Resume} download="Otto_Resume.pdf" className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Fale comigo</a>
    </div>
  )
}
