import Logo from "~/assets/Logo.jpg";
import LinkedIn from "~/components/img/LinkedIn";
import Mail from "./img/mail";
import CVIcon from "./img/cv";
import { ActionButton } from "./ActionButton";

export default function PersonalInfo() {
  return (
    <section id="experiencia" className="my-24 py-8 px-2">
      <span>
        <div className="w-24 h-24">
          <img className="rounded-md" src={Logo} alt="Logo" />
        </div>
        <h2 className="py-5 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          <span>Hey, soy Rodrigo Leon</span>
        </h2>
      </span>
      <h2 className=" text-sm sm:text-md md:text-lg lg:text-xl text-balance max-w-[700px] text-black dark:text-white">
        <span>+2 años de experiencia. </span>
        <span className="text-yellow-800 dark:text-yellow-200">
          Desarrollador Fullstack.{" "}
        </span>
        <span className="text-sky-800 dark:text-sky-200">
          Especializado en crear experiencias únicas en todo tipo de
          dispositivos.
        </span>
      </h2>
      <article className="px-5 py-3 flex gap-2 items-start">
        <ActionButton
          onClick={() => {
            window.open("https://www.linkedin.com/in/rodrigo-gibran-felix-leon/", "_blank");
          }}
          Icon={LinkedIn} text="LinkedIn" />

        <ActionButton onClick={() => {
          const email = atob("cm9kcmlnb2dpYnJhbmZsQGdtYWlsLmNvbQ==");
          window.location.href = `mailto:${email}`;
        }}
          Icon={Mail}
          text="Contácteme" />
        <ActionButton
          onClick={() => {
            window.open("/MyCV.pdf")
          }}
          Icon={CVIcon} text="Descargar CV" />
      </article>
    </section>
  );
}
