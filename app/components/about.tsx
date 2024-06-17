import ProfileCheck from "../assets/me.png";

export default function About() {
  return (
    <article id="about" className="about-section w-full mx-auto lg:w-1/2 pb-24">
      <style>{`
        @media (max-width: 640px) {
          .flex-column-on-small {
            flex-direction: column;
          }
        }
      `}</style>
      <div className="profile-section justify-center py-11">
        <div className="flex flex-column-on-small items-center gap-4 p-5">
          <span className="bg-gray-800 size-[165px] lg:size-[200px] rounded-full transform translate-x-1 translate-y-1"></span>
          <img
            src={ProfileCheck}
            alt="Rodrigo Leon"
            className="absolute size-[165px] lg:size-[200px] rounded-full"
            draggable="false"
          />
          <h1 className=" text-2xl lg:text-3xl pl-3 text-white">Sobre Mí</h1>
        </div>
      </div>
      <div className="flex">
        <p className="flex-grow text-[23px] lg:text-[26px]">
          Soy una persona apasionada por dar vida a las ideas. Me encanta
          aprender y experimentar con nuevas tecnologías. Me considero
          autodidacta y disfruto aprender cosas nuevas para aplicarlas en mis
          proyectos.
        </p>
      </div>
    </article>
  );
}
