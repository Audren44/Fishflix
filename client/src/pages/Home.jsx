import "./styles/home.css";
import Card from "../components/Card";

function Home() {
  return (
    <main className="homepage">
      <h1 className="title">Fishflix</h1>
      <Card />
      <div className="button-container">
        <button type="button">Ajoute un film</button>
      </div>
    </main>
  );
}

export default Home;
