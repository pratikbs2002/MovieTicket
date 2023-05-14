import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>Movie Ticket</h1>
      <div className="card-container">
        {data && (
          <>
            {data.map((card, index) => (
              <Card key={index} singleData={card.show} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
