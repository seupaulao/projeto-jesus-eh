import './App.css'
import './w3.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Ajuda from "./pages/Ajuda";
import Intro from "./pages/Intro";
import Mapa from "./pages/Mapa";
import Mensagem from "./pages/Mensagem";
import Menu from "./pages/Menu";
import NoPage from "./pages/NoPage";
import Outras from "./pages/Outras";
import Texto from "./pages/Texto";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Intro />} />
          <Route path="/mensagem" element={<Mensagem />} />
          <Route path="/texto" element={<Texto />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/outras" element={<Outras />} />
          <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
