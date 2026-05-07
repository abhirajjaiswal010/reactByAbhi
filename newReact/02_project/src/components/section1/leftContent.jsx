import { ArrowUpRight } from "lucide-react";
const LeftContent = () => {
  return (
    <div className="bg-white h-[90%] w-[25%] flex flex-col justify-between">
      <div className="flex flex-col gap-5 px-2 mt-5">
        
        <div className="text-5xl  font-bold capitalize leading-15 ">
          Propspective <br /> customer <br /> segmentation
        </div>
        <div className="font-extralight ">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem natus distinctio, itaque possimus maiores placeat consequatur quaerat in provident at ullam magnam repudiandae cumque dolorem exercitationem quo vitae dolore! Ducimus nam repudiandae fugit, illo consequatur impedit quo quod inventore! Quae.
        </div>
      </div>
      <div>
        <ArrowUpRight size={80} />
      </div>
    </div>
  );
};

export default LeftContent;
