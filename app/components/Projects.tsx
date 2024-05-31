import Card from "./Card";
import DevIcon from "./img/dev";

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="flex items-center">
        <DevIcon />
        <span className="font-semibold text-[40px] pl-4">Proyectos</span>
      </div>
      <div className="pt-5 justify-center grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          cardName="Zibu"
          description="Fui uno de los principales desarrolladores de Zibu en su version web y Movil en el frontend y parte del backend."
          toLink="https://zibu.app/"
          badged={["Dart", "Flutter","NodeJS","React","TypeScript","TailwindCSS","Google cloud", "Firebase",]}
        />
        <Card
          cardName="Recuerda mi historia"
          description="Recuerda mi historia es un lugar seguro y privado en donde puedes preservar los recuerdos de tus familiares y amigos."
          toLink=""
          badged={["React", "Remix", "TypeScript", "Css","ElysiaJS","Firebase"]}
        />
      </div>
    </section>
  );
}
