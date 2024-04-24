import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am a software engineer with a passion for building user-friendly and
        efficient applications. I am proficient in a variety of programming
        languages and technologies, and I am always eager to learn new things.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
