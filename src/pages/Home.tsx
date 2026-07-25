import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate();
    return(
      <main className="home">
        <section className="hero">

          <h1>TicketHub</h1>

          <h2>Compra y vende boletas de forma segura</h2>

          <p>
            Encuentra entradas para conciertos, festivales,
            eventos deportivos y mucho más.
          </p>

          <button onClick={() => navigate ("/events")}>
            Explorar Eventos
            </button>

        </section>
      </main>
    );
}
export default Home;