import LeftContent from "./leftContent";
import RightContent from "./rightContent";

const HeroContent = () => {
  return (
    <div className="px-30  w-full flex-1 flex flex-row justify-between items-center ">
      <LeftContent  />
      <RightContent />
    </div>
  );
};

export default HeroContent;
