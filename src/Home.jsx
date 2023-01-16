import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <h1>Hola bienvenido a EDmarket</h1>
        <p>Conoce a las 100 criptos mas usadas</p>
        <Link to="/criptomonedas">Ver Criptosmonedas</Link>
        </>
    )
}

export default Home;