import type { MetaFunction } from "@remix-run/node";
import PersonalInfo from "~/components/PersonalInfo";
import Projects from "~/components/Projects";
import TopHeader from "~/components/TopHeader";
import About from "~/components/about";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio de Rodrigo Leon" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  return (
    <main className="text-white dark bg-gradient-to-r from-black to-gray-900 min-h-screen items-center justify-center">
      <TopHeader />
      <article className="sm:px-12 md:px-24 lg:px-52 py-4 flex flex-col px-9">
        <PersonalInfo />
        <Projects />
        <About />
      </article>
      <Footer />
    </main>
  );
}
