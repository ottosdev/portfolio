import { MdEmail } from "react-icons/md";
import "./styles.css";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const service = import.meta.env.VITE_SERVICES_ID;
  const template = import.meta.env.VITE_TEMPLATE_ID;
  const publicid = import.meta.env.VITE_PUBLIC_ID;
  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(service, template, form.current!, publicid)

      .then(
        (result) => {
          setLoading(false);

          if (result) {
            toast.success("Mensagem enviada com sucesso");
            setLoading(false);
          }
          e.target.reset();
        },
        (error) => {
          toast.error(
            "Error ao enviar mensagem, clique na caixa ao lado para enviar"
          );
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__icon" />
            <h4>E-mail</h4>
            <h5>otto_neto@outlook.com.br</h5>
            <a href="mailto:otto_neto@outlook.com.br">Enviar</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="e-mail" placeholder="Seu email" required />
          <textarea
            required
            name="message"
            rows={7}
            placeholder="Sua mensagem"
          ></textarea>
          {loading ? (
            <button className="loader"></button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          )}
        </form>
      </div>
      <Toaster />
    </section>
  );
};
