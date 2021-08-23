import React, { useState, useEffect } from "react";
import Axios from "axios";

function People() {
  const [charName, setCharName] = useState("");
  const [charHeight, setCharHeight] = useState("");
  const [charMass, setCharMass] = useState("");
  const [charGender, setCharGender] = useState("");
  const [charHairColor, setCharHairColor] = useState("");
  const [charBirthYear, setCharBirthYear] = useState("");

  useEffect(() => {
    Axios.get("https://swapi.dev/api/people").then((res) => {
      setCharName(res.data.results[0].name);
      setCharHeight(res.data.results[0].height);
      setCharMass(res.data.results[0].mass);
      setCharGender(res.data.results[0].gender);
      setCharHairColor(res.data.results[0].hair_color);
      setCharBirthYear(res.data.results[0].birth_year);
      // console.log(res.data);
    });
  }, []);

  return (
    <div className="Characters">
      <h2>
        Now that you have your alias and new home planet, lets get the crew
        asembled!
      </h2>
      <h3>
        Check out the "smugglers" avaliable below and choose 3 to join your
        team!
      </h3>

      <h4 className="Luke">
        {charName}: <br />
        Height: {charHeight} <br /> Gender: {charGender} <br /> Weight:
        {charMass} <br /> Hair Color: {charHairColor} <br /> Birth Year:{" "}
        {charBirthYear}
      </h4>
    </div>
  );
}

export default People;
