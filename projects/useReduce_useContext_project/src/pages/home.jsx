import { Navbar } from "../components/navbar";
import { Product } from "../components/product";
import { Data } from "../data";
export const Home = () => {
  return (
    <div>
      <Navbar />

      <h2 className="text-4xl tracking-wide py-4 pl-8"></h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-8 place-items-center ">
        {Data.map((item, i) => (
          <div key={i} className="w-60 h-100">
            <Product item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
