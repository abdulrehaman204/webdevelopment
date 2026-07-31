import React from 'react'

function Student() {

  const marks = 88;
  const attendance = 82;
  const feePaid = true;

  let grade = "";

  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 75) {
    grade = "B";
  } else {
    grade = "C";
  }

  return (
    <div>
       <h1>Student Dashboard</h1>

      {attendance < 75 ? (
        <h2>Attendance Shortage</h2>
      ) : marks < 35 ? (
        <h2>Failed</h2>
      ) : !feePaid ? (
        <h2>Pay Fees to View Result</h2>
      ) : (
        <>
          <h2>Congratulations!</h2>
          <h3>Grade: {grade}</h3>
        </>
      )}
    </div>
  )
}

export default Student
