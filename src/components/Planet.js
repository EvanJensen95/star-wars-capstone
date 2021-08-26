import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function Planet() {
  const homePlanetArr = [
    "Coruscant",
    "Tatooine",
    "Naboo",
    "Kamino",
    "Alderaan",
    "Hoth",
    "Dagobah",
    "Bespin",
    "Mustafar",
    "Yavin",
    "Corellia",
    "Ryloth",
    "Mandalore",
    "Hal Hutta",
    "Florrum",
  ];

  const [homePlanet, setHomePlanet] = useState("");

  let [randomHomePlanet, setRandomHomePlanet] = useState("");

  const handleRandomHomePlanet = () => {
    const randomIndex = Math.floor(Math.random() * 15);
    setRandomHomePlanet(homePlanetArr[randomIndex]);
  };
  return (
    <div className="Planets">
      <h2 className="NewHomePlanet">
        Now lets get you a new home planet in case we get, you know, into more
        trouble than we would like...
      </h2>
      <br />
      <h2 id="GetHomePlanet">
        Your New Home Planet:&nbsp; <span>{randomHomePlanet}</span>
      </h2>
      <div className="yourHomePlanet">
        <br />
        <h4>
          Your Old Home Planet:&nbsp; <span>{homePlanet}</span>
        </h4>
      </div>
      <div>
        <div className="YourPlanetContainer">
          <br />

          <input
            type="string"
            placeholder="Your Home Planet"
            onChange={(e) => setHomePlanet(e.target.value)}
          />
        </div>
        <br />
        <div className="HomePlanetButton">
          <Button
            id="getNewHomePlanet"
            onClick={() => {
              handleRandomHomePlanet();
            }}
          >
            New Home Planet
          </Button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Planet;
