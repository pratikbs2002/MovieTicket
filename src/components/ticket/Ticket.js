import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Ticket.css";
import defaultImage from "../../assets/default.png";
import DOMPurify from "dompurify";
import BookingForm from "./BookingForm";

export default function Ticket() {
  const location = useLocation();
  const showData = location.state;

  const genresList = showData.genres.map((genres, index) => (
    <li className="list" key={index}>
      {genres}
    </li>
  ));

  const [openForm, setOpenForm] = useState(false);
  const onClickHandler = () => {
    setOpenForm(!openForm);
  };
  const [submitStatus, setSubmitStatus] = useState(false);

  return (
    <>
      <div className="background">
        <img
          src={
            showData.image?.original || showData.image?.medium || defaultImage
          }
          alt="default"
        />
      </div>
      <div className="ticket-main-container">
        <div className="first-part">
          <img
            src={
              showData.image?.original || showData.image?.medium || defaultImage
            }
            alt="default"
          />
        </div>
        <div className="second-part">
          <div className="title">{showData.name}</div>
          <div className="genres">
            <ul>{genresList}</ul>
          </div>
          <div className="summary">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(showData.summary),
              }}
            />
          </div>
          <div className="book-ticket-button-container">
            <button className="book-ticket-button" onClick={onClickHandler}>
              Book Ticket
            </button>
          </div>

          {openForm && (
            <BookingForm
              showData={showData}
              submitStatus={submitStatus}
              setSubmitStatus={setSubmitStatus}
            />
          )}
        </div>
      </div>
    </>
  );
}
