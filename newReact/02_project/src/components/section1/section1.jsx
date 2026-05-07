import HeroContent from "./HeroContent";

import Navbar from "./navbar";

const Section1 = () => {
  return (
    <div className="h-screen w-full bg-{#fff} flex flex-col ">
      <Navbar />
      <HeroContent/>
    </div>
  );
};

export default Section1;
