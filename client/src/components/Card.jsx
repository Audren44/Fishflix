import { useState, useEffect } from "react";
import "./styles/card.css";

function Card() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/films`)
      .then((response) => response.json())
      .then((data) => setFilms(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <main className="fishcard">
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <h3>{film.title}</h3>
            <p>{film.director}</p>
            <p>{film.year}</p>
            <p>{film.genre}</p>
            <p>{film.connection_detail}</p>
            <img src={film.image_url} alt={film.title} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Card;
