import React from "react";
import Button from "./Button";
import Card from "./Card";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Card
        title="Welcome"
        description="This is the home page card."
      >
        <Button
          text="Learn More"
          color="green"
          onClick={() => alert("Home Button Clicked")}
        />
      </Card>
    </div>
  );
}

export default Home;