import { Link } from "@remix-run/react";

const TopHeader = () => {
  return (
    <header className="flex items-center justify-center px-6 py-4">
      <nav className="rounded-full">
        <ul className="flex items-center gap-12 text-responsive sm:text-xl lg:text-1xl xl:text-2xl">
          <li>
            <Link className="text-white hover:text-gray-300" to="/#experiencia">
              Experiencia
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" to="/#proyectos">
              Proyectos
            </Link>
          </li>

          <li>
            <Link className="text-white hover:text-gray-300" to="/#about">
              Sobre mí
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopHeader;
