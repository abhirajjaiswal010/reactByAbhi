import { Children } from "react";

export const Profile_card = () => {
  return (
    <>
      <ProfileCard
        name={"Abhiraj"}
        age={45}
        greeting={
          <div>
            <p>hi i am Abhiraj , what a wonderfull day </p>
          </div>
        }>
        <p>hobbies : coding,drawing</p>
        <button>Contact</button>
      </ProfileCard>
      <ProfileCard
        name={"Ankit"}
        age={34}
        greeting={
          <div>
            <p>hi i am Ankit , what a happy day </p>
          </div>
        }>
        <p>hobbies : coding,drawing</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
};

function ProfileCard(props)
{
return(
  <div>
    <h4>Name:{props.name}</h4>
  <p>Age:{props.age}</p>
  <div>Greeting:{props.greeting}</div>
<div>{props.children}</div>
  </div>
)
}
