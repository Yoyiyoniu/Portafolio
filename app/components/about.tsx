import ProfileCheck from "./img/profile";

const ProfileSection = () => (
  <div className="profile-section flex-col justify-center py-11">
    <div className="flex items-center p-5">
      <ProfileCheck />
      <h1 className="profile-title text-2xl pl-3 text-white">Sobre Mí</h1>
    </div>
  </div>
);

const AboutText = () => (
  <div className="flex">
    <p className="flex-grow">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi earum
      adipisci nobis, odio et quidem ex accusamus facilis beatae temporibus
      nostrum incidunt ratione error. Consequuntur, similique. Atque itaque
      animi a.
    </p>
  </div>
);

export default function About() {
  return (
    <article id="about" className="about-section w-full mx-auto lg:w-1/2 pb-24">
      <ProfileSection />
      <AboutText />
    </article>
  );
}
