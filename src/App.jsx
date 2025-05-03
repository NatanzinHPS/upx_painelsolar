import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navegacao from "./components/Navegacao";
import Footer from './components/Footer'
import TelaInicial from "./telas/TelaInicial";
import TelaProjeto from "./telas/TelaProjeto";
import TelaSaibaMais from "./telas/TelaSaibaMais";
import TelaSobre from "./telas/TelaSobre";

function Layout() {
  return (
    <>
      <Navegacao />
      <main>
        <Outlet />
      </main> 
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TelaInicial />} />
        <Route path="projeto" element={<TelaProjeto />} />
        <Route path="saibaMais" element={<TelaSaibaMais />} />
        <Route path="sobre" element={<TelaSobre />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
