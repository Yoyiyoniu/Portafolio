import Logo from "~/assets/Logo.jpg";
import { Link } from "@remix-run/react";
import LinkedIn from "~/components/img/LinkedIn";
import Mail from "./img/mail";

export default function PersonalInfo() {
  return (
    <section id="experiencia" className="py-8 px-2">
      <button onClick={() => {
        console.log("Hola");
      }}>
        <div className="w-24 h-24">
          <img className="rounded-md" src={Logo} alt="Logo" />
        </div>
        <h2 className="py-5 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          <span>Hey, soy Rodrigo Leon</span>
        </h2>
      </button>
      <h2 className=" text-sm sm:text-md md:text-lg lg:text-xl text-balance max-w-[700px] text-black dark:text-white">
        <span>+2 años de experiencia. </span>
        <span className="text-yellow-800 dark:text-yellow-200">
          Desarrollador Jr FrontEnd y Backend.{" "}
        </span>
        <span className="text-sky-800 dark:text-sky-200">
          Especializado en crear experiencias únicas.
        </span>
      </h2>
      <article className="py-6 flex flex-col md:flex-row items-start">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.linkedin.com/in/rodrigo-gibran-felix-leon/"
          className="mx-3 items-center flex border border-[#3a3a44] bg-[#292835] hover:bg-[#33333f] p-2 rounded-full mr-2 mb-2 transform hover:scale-90 transition-transform">
          <LinkedIn width={30} height={30} />
          <p className="p-1">LinkedIn</p>
        </Link>

        <Link
          to="mailto:rodrigogibranfl@gmail.com"
          className="items-center mx-3 flex border border-[#3a3a44] bg-[#292835] hover:bg-[#33333f] p-2 rounded-full mr-2 mb-2 transform hover:scale-90 transition-transform">
          <Mail width={30} height={30} />
          <p className="p-1">Contactarme</p>
        </Link>
      </article>
    </section>
  );
}
