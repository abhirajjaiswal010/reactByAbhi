const Navbar = () => {
  return (
    <div className="flex flex-row justify-between py-5 px-20 ">
      <h4 className="text-lg font-semibold  bg-black text-white px-5 py-2 rounded-full capitalize hover:bg-white hover:text-black border-2 border-black transistion-all duration-300 ease-in-out">
        Target Audience
      </h4>
      <button className="text-lg capitalize tracking-wider font-medium ">
        digital banking platform
      </button>
    </div>
  );
};

export default Navbar;
