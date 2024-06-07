import ProfileCheck from "../assets/me.png";

export default function About() {
  return (
    <article id="about" className="about-section w-full mx-auto lg:w-1/2 pb-24">
      <div className="profile-section flex-col justify-center py-11">
        <div className="flex items-center gap-4 p-5">
          <span className=
            "bg-gray-800 size-[165px] rounded-full transform translate-x-1 translate-y-1">
          </span>
          <img
            src={ProfileCheck}
            alt="Rodrigo Leon"
            className="absolute size-[165px] rounded-full"
            draggable="false"
          />  
          <h1 className=" text-2xl pl-3 text-white">Sobre Mí</h1>
        </div>
      </div>
      <div className="flex">
        <p className="flex-grow text-[23px]"> 
          Soy una persona apasionada por dar vida a las ideas.
          Me encanta aprender y experimentar con nuevas tecnologías.
          Me considero autodidacta y disfruto aprender cosas nuevas para aplicarlas en mis proyectos.
        </p>
      </div>
    </article>
  );
}