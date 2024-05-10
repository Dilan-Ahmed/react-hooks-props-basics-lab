import React from "react";

function Home(props) {
  const name = props.name;
  const city = props.city;

  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
