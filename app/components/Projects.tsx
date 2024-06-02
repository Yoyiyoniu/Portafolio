import Card from "./Card";
import DevIcon from "./img/dev";
import Remi from "./img/pr/remi";
import Zibu from "./img/pr/zibu";

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="flex items-center">
        <DevIcon />
        <p className="font-semibold pl-4 text-[30px] sm:text-base md:text-[25px] lg:text-[30px] xl:text-[35px]">Proyectos</p>
      </div>
      <div className="pt-5 justify-center grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Card
          cardName="Recuerda Mi Historia"
          description="Mi sitio web Recuerda Mi Historia es un lugar seguro y privado en donde puedes preservar los recuerdos de tus familiares y amigos."
          toLink="https://www.recuerda-mi-historia.com/"
          badged={["React", "Remix", "TypeScript", "Css", "ElysiaJS", "Firebase"]}
          svg={<Remi/>}
        />
      <Card
        cardName="Zibu"
        description="Fui uno de los desarrolladores de la aplicación Zibu y desempañe un papel de desarrollador fullstack."
        toLink="https://zibu.app/"
        badged={["Dart", "Flutter", "Grpc", "React", "TypeScript", "TailwindCSS", "Google cloud", "Firebase",]}
        svg={<Zibu />}
      />      
      </div>
    </section>
  );
}
