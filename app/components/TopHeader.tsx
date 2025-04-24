import { Link } from "@remix-run/react";

const TopHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4">
      <nav>
        <ul className="bg-slate-700/30 px-9 py-3 rounded-full backdrop-blur-sm flex items-center gap-9 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          <li>
            <Link
              className="hover:underline text-white hover:text-gray-300"
              to="/#experiencia"
            >
              Experiencia
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline text-white hover:text-gray-300"
              to="/#proyectos"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline text-white hover:text-gray-300"
              to="/#about"
            >
              Sobre mí
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopHeader;
