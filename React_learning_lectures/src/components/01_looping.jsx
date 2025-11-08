import seriesData from "../API/seriesData.json";
import  {Prop}  from "./02_props";
import "../components/netflixCard.module.css";

export const Loop = () => {
  return (
    <section className="container">
      <h1 className="card_heading">List of series</h1>
      <NetflixCard />
    </section>
  );
};

const NetflixCard = () => {
  return (
    <div className="grid grid_three_col">
      {seriesData.map((e) => {
        return <Prop e={e} key={e.id}/>;
      })}
    </div>
  );
};
