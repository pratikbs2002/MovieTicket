import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import "./BookingForm.css";

export default function BookingForm({
  showData,
  submitStatus,
  setSubmitStatus,
}) {
  const [formState, setFormState] = useState({
    name: "",
    city: "",
    date: "",
    time: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(formState).every((val) => val !== "")) {
      const userData = {
        movieName: showData.name,
        ...formState,
      };
      sessionStorage.setItem("userData", JSON.stringify(userData));
      setFormState({ name: "", city: "", date: "", time: "" });
      setSubmitStatus(true);
      window.alert("Your Ticket is Booked");
    } else {
      window.alert("Please fill in all required information");
    }
  };

  return (
    <>
      <div className="booking-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-book">
            <label>
              Movie Name:
              <input type="text" value={showData.name} disabled />
            </label>
            <label>
              Name:
              <input
                placeholder="Enter your name"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleFormChange}
              />
            </label>
            <label>
              City:
              <input
                placeholder="Enter your city"
                type="text"
                name="city"
                value={formState.city}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={formState.date}
                onChange={handleFormChange}
              />
            </label>
            <label>
              Time:
              <input
                placeholder="time"
                type="time"
                name="time"
                value={formState.time}
                onChange={handleFormChange}
              />
            </label>
          </div>
          <div className="book-form-submit-button">
            {submitStatus ? (
              <button
                style={{ backgroundColor: "green" }}
                type="submit"
                disabled={submitStatus}
              >
                <MdOutlineDone /> booked
              </button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
