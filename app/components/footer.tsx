import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
      <p className="text-xs text-gray-400">
        &copy; {year} Rodrigo Gibran Felix Leon. Todos los derechos reservados
      </p>
    </footer>
  );
}
