import styles from "../components/netflixCard.module.css";
import styled from "styled-components";
export const Prop = ({ e }) => {
  const { img_url, description, rating, watch_url, title, id, cast } = e;
  // const Button = styled.button`
  //   padding: 6px 12px;
  //   background-color: rgb(5, 100, 243);
  //   color: white;
  //   border: none;
  //   border-radius: 0px;
  //   font-weight: 600;
  //   cursor: pointer;
  //   transition: background-color 0.3s ease;
  // `;

  const Button = styled.button({
    padding: "6px 12px",
    backgroundColor: "rgb(5,100,243)",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  });

  return (
    <div className={styles.netflix_card}>
      <img src={img_url} alt={title} />
      <h3 style={{ fontWeight: "bold", fontStyle: "oblique" }}>Name : {id}</h3>
      <h3>
        Rating :
        <span className={rating >= 8.5 ? styles.super_hit : styles.average}>
          {rating}
        </span>
      </h3>
      <h3 className="text-1xl ">Summary : {description}</h3>
      <h3>Cast : {cast.join(" , ")}</h3>
      <a href={watch_url}>
        <Button>Watch</Button>
      </a>
    </div>
  );
};
