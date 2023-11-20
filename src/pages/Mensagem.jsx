import { Link } from "react-router-dom";

const Mensagem = () => {
    return (
         <>
            <h1>Jesus é...</h1>
            
            <h2>O caminho, a verdade e a vida</h2>

            <Link to="/texto">Continuar</Link>
         </>
    ); 
}

export default Mensagem;