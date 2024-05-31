import type { MetaFunction } from "@remix-run/node";
import PersonalInfo from "~/components/PersonalInfo";
import Projects from "~/components/Projects";
import TopHeader from "~/components/TopHeader";
import About from "~/components/about";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio de Rodrigo Leon | Desarrollador" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  return (
    <div className=" text-white dark bg-gradient-to-r from-black to-gray-900 min-h-screen items-center justify-center">
      <TopHeader />
      <main className="sm:px-12 md:px-24 lg:px-52 py-4 flex flex-col px-9">
        <PersonalInfo />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}
