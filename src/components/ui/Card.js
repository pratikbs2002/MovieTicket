import React from "react";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../assets/default.png";
import "./Card.css";
export default function Card(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/bookticket/${props.singleData.id}`, { state: props.singleData });
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        src={
          props.singleData.image?.medium ||
          props.singleData.image?.original ||
          defaultImage
        }
        alt={props.singleData.name}
      />
      <div className="card-body">
        <h3>{props.singleData.name}</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.singleData.rating.average ? (
            <p style={{ width: "100%" }}>
              ⭐ {props.singleData.rating.average}/10
            </p>
          ) : (
            <p style={{ width: "100%" }}>⭐ -/10</p>
          )}
          <div
            style={{
              padding: "5px",
              border: "2px solid #FFD95A",
              borderRadius: "10px",
              textAlign: "center",
              width: "100%",
            }}
          >
            {props.singleData.language}
          </div>
        </div>
      </div>
    </div>
  );
}
