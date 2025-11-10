import React from "react";
import "./Card.css";

const Card = ({ title, description, imgUrl, onAction }) => {
  return (
    <div className="card">
      <img src={imgUrl || "https://i.pravatar.cc/150?img=3"} alt={title} />
      <div className="card-body">
        <h3>{title || "Card Title"}</h3>
        <p>{description || "This is a description for the card."}</p>
        <button className="btn btn-primary" onClick={onAction}>Action</button>
      </div>
    </div>
  );
};

export default Card;
