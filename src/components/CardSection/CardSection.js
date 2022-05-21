import React from "react";
import "./CardSection.css";
import Card from "../Card/Card";
import { useGlobalContext } from "../../context";

const CardSection = () => {
  const { stays } = useGlobalContext();
  return (
    <section className="main__card-section">
      <div className="main__card-section__info-container">
        <h1>Stays in Finland</h1>
        <p>12+ stays</p>
      </div>

      <div className="main__card-section__card-container">
        {stays.map((stay, index) => {
          return <Card key={index} {...stay} />;
        })}
      </div>
    </section>
  );
};

export default CardSection;
