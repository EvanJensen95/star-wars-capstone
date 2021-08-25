import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function Alias() {
  const firstNameArr = [
    "Darth",
    "Obi-Wan",
    "Luke",
    "Sheev",
    "R2",
    "Leia",
    "Lando",
    "Padme",
    "Anakin",
    "Jabba",
    "Jango",
    "Boba",
    "Count",
    "Moff",
    "Mace",
    "Kylo",
    "Qui-Gon",
    "General",
    "Ahsoka",
    "Wedge",
    "Ezra",
    "Kanan",
    "Rey",
    "Poe",
    "Finn",
    "Jar Jar",
    "Senator",
    "Jyn",
    "Rex",
    "Grand Admiral",
  ];
  const lastNameArr = [
    "Vader",
    "Skywalker",
    "Kenobi",
    "Palpatine",
    "D2",
    "Organa",
    "Calrissian",
    "Amidala",
    "the Hutt",
    "Dooku",
    "Tarkin",
    "Gideon",
    "Ren",
    "Jin",
    "Grievous",
    "Ackbar",
    "Tano",
    "Antilles",
    "Dameron",
    "Fett",
    "Binks",
    "Mothma",
    "Lars",
    "Erso",
    "Thrawn",
    "Hux",
    "Jarrus",
    "Bridger",
    "Secura",
  ];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  let [randomAlias, setRandomAlias] = useState("");

  const handleRandomAlias = () => {
    const randomIndex = Math.floor(Math.random() * 28);
    setRandomAlias(firstNameArr[randomIndex] + " " + lastNameArr[randomIndex]);
  };

  return (
    <div className="centerButton">
      <h2 className="Alias">
        Before you round up some extra help, we need to get you a new name, or
        better yet, an alias! I mean, your name is fine but it seems a little
        too Earthy...
      </h2>
      <br />
      <div className="randomAlias">
        <h2 id="GetAlias">
          Your Alias:&nbsp; <span>{randomAlias}</span>
        </h2>
      </div>
      <div className="yourName">
        <br />
        <h5>
          Your Old Name:&nbsp;{" "}
          <span>
            {firstName} {lastName}
          </span>
        </h5>
      </div>
      <div className="firstNameContainer">
        <div>
          <br />
          <h6>Your Current First Name:</h6>
          <input type="string" onChange={(e) => setFirstName(e.target.value)} />
        </div>
      </div>
      <div className="lastNameContainer">
        <div>
          <br />
          <h6>Your Current Last Name:</h6>
          <input type="string" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <br />
        <div className="AliasButton">
          <Button
            id="getAlias"
            onClick={() => {
              handleRandomAlias();
            }}
          >
            New Alias
          </Button>
        </div>
        <br />
      </div>
    </div>
  );
}
export default Alias;
