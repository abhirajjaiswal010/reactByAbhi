// const GreetUser = () => {
//   const isLoggedIn = true;

//   return (
//     <h1>{isLoggedIn ? "Welcome Back, Abhi!" : "Please Log In"}</h1>
//   );
// }

// export default GreetUser;


//? ---
// const Message=()=> {
//   const isMorning = true;

//   return (
//     <div>
//       <h2>Hello Abhi!</h2>
//       {isMorning && <p>Good Morning 🌞</p>}
//     </div>
//   );
// }

// export default Message;

//? ---

const Status=()=> {
  const isOnline = true;
  let statusMessage;

  if (isOnline) {
    statusMessage = "🟢 Online";
  } else {
    statusMessage = "🔴 Offline";
  }

  return <p>Status: {statusMessage}</p>;
}

export default Status;

