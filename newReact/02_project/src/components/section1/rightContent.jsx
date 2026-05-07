const images = [
  "https://images.pexels.com/photos/36781463/pexels-photo-36781463.jpeg",
  "https://images.pexels.com/photos/36752536/pexels-photo-36752536.jpeg",
  "https://images.pexels.com/photos/12409615/pexels-photo-12409615.jpeg",
  "https://images.pexels.com/photos/12409615/pexels-photo-12409615.jpeg",
  "https://images.pexels.com/photos/10091057/pexels-photo-10091057.jpeg"
];

const RightContent = () => {
  return (
    <div className="w-[70%] h-[90%] flex gap-5 items-center overflow-x-hidden px-6">

      {images.map((img, index) => (
        <div
          key={index}
          className="relative rounded-4xl overflow-hidden h-[600px] min-w-[300px]"
        >

          {/* Number Badge */}
          <div className="absolute z-20 left-7 top-5 text-3xl bg-white/60 px-5 py-3 rounded-full font-bold backdrop-blur-md">
            {index + 1}
          </div>

          {/* Image */}
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover"
          />

          
<div className=" bg-black/20 absolute inset-0"></div>
          {/* Bottom Content */}
          <div className="absolute bottom-25 left-7 z-20 text-white">
            

            <p className="max-w-[80%] text-xl font-bold text-left text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

        </div>
      ))}

    </div>
  );
};

export default RightContent;