import React from "react";

export const FirstInterview = () => {
  const students = [1,8,9,9];
  return (
    <>
      {/* <p>{students.length && "No students found"}</p> */}
      {/*alse and react do nnot render flase.null.undefind */}
      {/* 1st solution */}
      <p>{students.length===0  && "No students found"}</p>
      {/* 2nd solution */}
      <p>{!students.length && "No students found"}</p>
      {/* 3rd solution */}
      <p>{!Boolean(students.length)&& "No students found"}</p>
      <p>no. of students : {students.length}</p>
    </>
  );
};


