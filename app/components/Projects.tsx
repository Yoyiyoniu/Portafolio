import Card from "./Card";
import DevIcon from "./img/dev";
import Remi from "./img/pr/remi";
import Zibu from "./img/pr/zibu";

import zibuImg from "../assets/mock/905shots_so.png";
import remiImg from "../assets/mock/94shots_so.png";

export default function Projects() {
  return (
    <section id="proyectos">
      <div className="flex items-center">
        <DevIcon />
        <p className="font-semibold pl-4 text-[30px] sm:text-base md:text-[25px] lg:text-[30px] xl:text-[35px]">
          Proyectos
        </p>
      </div>
      <div className="mb-16 pt-5 justify-center grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          image={remiImg}
          cardName="Recuerda Mi Historia"
          description="Mi sitio web Recuerda Mi Historia es un lugar seguro y privado en donde puedes preservar los recuerdos de tus familiares y amigos."
          toLink="https://www.recuerda-mi-historia.com/"
          badged={[
            "Typescript",
            "React",
            "Remix.run",
            "Express",
            "NodeJS",
            "Firebase",
          ]}
          svg={<Remi />}
        />
        <Card
          image={zibuImg}
          cardName="Zibu"
          description="Fui el diseñador y desarrollador Frontend de de Zibu App y Zibu Business, usando Flutter y Remix.run para su desarrollo."
          toLink="https://zibu.app/"
          badged={[
            "Dart",
            "Typescript",
            "Flutter",
            "React",
            "Remix.run",
            "Grpc",
            "Express",
            "Firebase",
            "NodeJS",
          ]}
          svg={<Zibu />}
        />
      </div>
    </section>
  );
}
