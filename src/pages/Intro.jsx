import { Link } from "react-router-dom";
const Intro = () => {
    return (
         <>
            <h1>Jesus é...</h1>
            <Link to="/mensagem">Clique aqui para iniciar</Link>
         </>
    ); 
}

export default Intro;