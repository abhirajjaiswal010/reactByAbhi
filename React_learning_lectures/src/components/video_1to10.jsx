import React from "react";
//* ==> basics of JSX
// export const App = () => {
//   return (
//     <div>
//       <div>
//         <img src="got.jpg" alt="" height="200px"/>
//       </div>
//       <h2>Name: Game of Thrones</h2>
//       <h3>Rating: 8.2</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quia nihil tempore maxime est numquam sapiente quae veritatis autem cumque?
//       </p>
//     </div>
//   );
// };
//basics of components
//* ==> type of components

//& Class based components
//& Functional components
// export const App = ()=>
// {
//   return(
//     <div>
//      <NetflixSeries/>
//      <NetflixSeries/>
//      <NetflixSeries/>
//      <NetflixSeries/>
//     </div>
//   )
// }

// const NetflixSeries =()=>
// {
// return(
//   <div>
//         <div>
//           <img src="got.jpg" alt="" height="200px" />
//         </div>
//         <h2>Name: Game of Thrones from Netflix</h2>
//         <h3>Rating: 8.2</h3>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quia
//           nihil tempore maxime est numquam sapiente quae veritatis autem cumque?
//         </p>
//       </div>
// )
// }

//* ==> Fragment concept

//& by Array with key
// export const App = ()=>
// {
//   return[
//     <NetflixSeries key="1"/>,
//     <NetflixSeries key="2"/>,
//     <NetflixSeries key="3"/>,

//   ]
// }

//& by <React.fragment>...</React.fragment> or <fragment>...</fragment> or <>...</>

// export const App = () => {
//   return (
//     <React.Fragment>
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//     </React.Fragment>
//   );
// };
// const NetflixSeries = () => {
//   return (
//     <div>
//       <div>
//         <img src="got.jpg" alt="" height="200px" />
//       </div>
//       <h2>Name: Game of Thrones from Netflix</h2>
//       <h3>Rating: 8.2</h3>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quia
//         nihil tempore maxime est numquam sapiente quae veritatis autem cumque?
//       </p>
//     </div>
//   );
// };

//* ==> dynamic value in JSX

//& dynamic value by variables
// export const App = () => {
//   return (
//     <React.Fragment>
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//     </React.Fragment>
//   );
// };
// const NetflixSeries = () => {
//   const name = "games of throne";
//   const rating = 9;
//   const summary = "Game of Thrones is a fantasy TV series based on the book series A Song of Ice and Fire by George R.R. Martin. It aired from 2011 to 2019 and has 8 seasons.";
//   const returnGenre =()=>
//   {
//     const genre = "thriller"
//     return genre;
//   }
//   return (
//     <div>
//       <div>
//         <img src="got.jpg" alt="" height="200px" />
//       </div>
//       <h2>Name: {name}</h2>
//       {/* expression */}
//       <h3>Rating:{rating+.1}</h3>
//       <p>Summary:{summary}</p>
//       {/* function call */}
//       <p>Genre:{returnGenre()}</p>
//     </div>
//   );
// };

//! conditional values

export const App = () => {
  return (
    <React.Fragment>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </React.Fragment>
  );
};

const NetflixSeries = () => {
  const name = "games of throne";
  const rating = 9;
  const summary ="Game of Thrones is a fantasy TV series based on the book series A Song of Ice and Fire by George R.R. Martin. It aired from 2011 to 2019 and has 8 seasons.";
  let age = 25;
  const returnGenre = () => {
    const genre = "thriller";
    return genre;
  };
//^ 1.by if and else condition  //violtes the rules of DRY
  // if (age >= 18) {
  //   return (
  //     <div>
  //       <div>
  //         <img src="got.jpg" alt="" height="200px" />
  //       </div>
  //       <h2>Name: {name}</h2>
  //       {/* expression */}
  //       <h3>Rating:{rating + 0.1}</h3>
  //       <p>Summary:{summary}</p>
  //       {/* function call */}
  //       <p>Genre:{returnGenre()}</p>
  //       <button>Watch Me</button>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     <div>
  //       <img src="got.jpg" alt="" height="200px" />
  //     </div>
  //     <h2>Name: {name}</h2>
  //     {/* expression */}
  //     <h3>Rating:{rating + 0.1}</h3>
  //     <p>Summary:{summary}</p>
  //     {/* function call */}
  //     <p>Genre:{returnGenre()}</p>
  //     <button>Do Not Watch Me</button>
  //   </div>
  // );

  //^2. ternary operator
  // return (
  //   <div>
  //     <div>
  //       <img src="got.jpg" alt="" height="200px" />
  //     </div>
  //     <h2>Name: {name}</h2>
  //     {/* expression */}
  //     <h3>Rating:{rating + 0.1}</h3>
  //     <p>Summary:{summary}</p>
  //     {/* function call */}
  //     <p>Genre:{returnGenre()}</p>
  //     <button>{age>=18?"Watch now":"not available"}</button>
  //   </div>
  // );

  //^3 conditional type 3rd
  // let canWatch ="Not Available";
  // if(age>=18) canWatch="Watch Now";
  // return (
  //   <div>
  //     <div>
  //       <img src="got.jpg" alt="" height="200px" />
  //     </div>
  //     <h2>Name: {name}</h2>
  //     {/* expression */}
  //     <h3>Rating:{rating + 0.1}</h3>
  //     <p>Summary:{summary}</p>
  //     {/* function call */}
  //     <p>Genre:{returnGenre()}</p>
  //     <button>{canWatch}</button>
  //   </div>
  // );

  //^4 conditional type 4th
  let canWatch =()=>
    {if(age>=18) return "Watch Now";
      return "Not Available";
    };
  
  return (
    <div>
      <div>
        <img src="got.jpg" alt="" height="200px" />
      </div>
      <h2>Name: {name}</h2>
      {/* expression */}
      <h3>Rating:{rating + 0.1}</h3>
      <p>Summary:{summary}</p>
      {/* function call */}
      <p>Genre:{returnGenre()}</p>
      <button>{canWatch()}</button>
    </div>
  );
};


