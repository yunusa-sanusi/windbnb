import React from "react";
import { MdStar } from "react-icons/md";
import "./Card.css";

const Card = ({
  city,
  country,
  superHost,
  title,
  rating,
  maxGuests,
  type,
  beds,
  photo,
}) => {
  return (
    <article className="main__card-section__card-container__card">
      <div className="main__card-section__card-container__card-header">
        <img src={photo} alt={`${title} - ${city}, ${country}`} />
      </div>
      <div className="main__card-section__card-container__card-body">
        <div className="main__card-section__card-container__card-body__info">
          <div>
            {superHost && <span>super host</span>}
            <p>
              {type} . {beds} beds
            </p>
          </div>
          <div>
            <MdStar className="star-icon" />
            <p>{rating}</p>
          </div>
        </div>
        <div className="main__card-section__card-container__card-body__title">
          <h3>{title}</h3>
        </div>
      </div>
    </article>
  );
};

export default Card;
