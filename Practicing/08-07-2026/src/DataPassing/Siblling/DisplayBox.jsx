function DisplayBox({text}) {
  return (
    <div
    style={{
        border: "1px solid gray",
        padding: "15px",
        width: "300px",
        margin: "0 auto",
      }}
    >
     <h3>Display Box</h3>
      <p>{text || "Nothing to display"}</p>
    </div>
  )
}

export default DisplayBox
