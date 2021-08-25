import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function PeopleCards(props) {
  const [charName, setCharName] = useState("");
  const [charHeight, setCharHeight] = useState("");
  const [charMass, setCharMass] = useState("");
  const [charGender, setCharGender] = useState("");
  const [charHairColor, setCharHairColor] = useState("");
  const [charBirthYear, setCharBirthYear] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(
      `https://raw.githubusercontent.com/EvanJensen95/star-wars-capstone/main/images/${charName}.jpeg`
    );

    setCharName(props.name);
    setCharHeight(props.height);
    setCharMass(props.mass);
    setCharGender(props.gender);
    setCharHairColor(props.hair_color);
    setCharBirthYear(props.birth_year);
  }, [
    props.name,
    props.height,
    props.mass,
    props.gender,
    props.hair_color,
    props.birth_year,
    charName,
  ]);

  //   const cardInfo = [
  //     {
  //       image:
  //   "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2021%2F01%2FLuke-Skywalker-Return-of-the-Jedi.jpg",
  //       title: "Luke SkyWalker",
  //       text: "The Hope",
  //     },
  //     {
  //       image:
  //         "https://snworksceo.imgix.net/bsd/e08b54af-db5d-4a31-be34-260e5a6da34a.sized-1000x1000.jpg?w=1000",
  //       title: "Anakin SkyWalker",
  //       text: "The Choosen One",
  //     },
  //     {
  //       image:
  //         "https://www.liveabout.com/thmb/OHyay7RPSFHxasgJ9_Okz1Jhu-Q=/1167x1167/smart/filters:no_upscale()/yoda-56a8f97a3df78cf772a263b4.jpg",
  //       title: "Yoda",
  //       text: "The Little Green Guy",
  //     },
  //     {
  //       image:
  //         "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/07/1487160686-r2-d2.jpg?crop=1.00xw:0.816xh;0,0.0372xh&resize=1200:*",
  //       title: "R2-D2",
  //       text: "Astro-Mech",
  //     },
  //   ];
  //   const renderCard = (card, index) => {
  return (
    <div>
      <div>
        <Card style={{ width: "16rem" }} key={charName}>
          <Card.Img className="CardImages" variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{charName}</Card.Title>
            <Card.Text>Height: {charHeight} cm</Card.Text>
            <Card.Text>Weight: {charMass} kg</Card.Text>
            <Card.Text>Gender: {charGender}</Card.Text>
            <Card.Text>Hair Color: {charHairColor}</Card.Text>
            <Card.Text>DOB: {charBirthYear}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
  //   };
  //   return <div className="PeopleCard">{cardInfo.map(renderCard)}</div>;
}

export default PeopleCards;
