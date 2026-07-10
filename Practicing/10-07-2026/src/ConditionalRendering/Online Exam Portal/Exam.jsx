import React from 'react'

function Exam() {
  const isLoading = false;
  const isLoggedIn = true;
  const examCompleted = false;
  const timeLeft = 30;
  return (
    <div>
      {isLoading?(
        <h2>Loading Exam...</h2>
      ) : !isLoggedIn ?  (
        <h2>Please login to take the exam.</h2>
        ) : examCompleted ? (
        <h2>You have already completed the exam.</h2>
      ) : timeLeft === 0 ? (
        <h2>Time is up!</h2>
      ) : (
        <>
          <h2>Start Exam</h2>
          <button>Start</button>
        </>
      )}
    </div>
  )
}

export default Exam
