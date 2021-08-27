import React, { useState, useEffect } from "react";
import Axios from "axios";
import PeopleCards from "./PeopleCards";
import "bootstrap/dist/css/bootstrap.min.css";

function People({ data }) {
  // const [charName, setCharName] = useState("");
  // const [charHeight, setCharHeight] = useState("");
  // const [charMass, setCharMass] = useState("");
  // const [charGender, setCharGender] = useState("");
  // const [charHairColor, setCharHairColor] = useState("");
  // const [charBirthYear, setCharBirthYear] = useState("");
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    Axios.get("https://swapi.dev/api/people/?page=3").then((res) => {
      // setCharName(res.data.results[0].name);
      // setCharHeight(res.data.results[0].height);
      // setCharMass(res.data.results[0].mass);
      // setCharGender(res.data.results[0].gender);
      // setCharHairColor(res.data.results[0].hair_color);
      // setCharBirthYear(res.data.results[0].birth_year);
      // console.log(res.data);
      setCharacter(res.data.results);
    });
  }, []);

  return (
    <div className="Characters row">
      <h2>
        Now that you have your alias and new home planet, lets get the crew
        asembled!
      </h2>
      <br />

      <div>
        <br />
        <h3>Smugglers for Hire:</h3>
        {character.map((x) => (
          <div className="PeopleInfoDiv col-lg-4 col-md-4 col-sm-4">
            <PeopleCards
              key={x.name}
              name={x.name}
              height={x.height}
              mass={x.mass}
              hair_color={x.hair_color}
              gender={x.gender}
              birth_year={x.birth_year}
            />
          </div>
        ))}
      </div>
      <br />
      <div>
        <textarea
          className="CharChoicesBox"
          type="text"
          placeholder="Your 3 choices here"
        ></textarea>
        <br />
        <br />
        <button type="select">Submit your choices</button>
      </div>
      <br />

      <h3>
        Now it is time for you to embark on your smuggling journey to not only
        deliver the shipment and earn some credits, but to also put your Star
        Wars fandom to the test!
      </h3>
      <br />
    </div>
  );
}

export default People;
