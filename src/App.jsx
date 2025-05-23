import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Navegacao from "./components/Navegacao";
import Footer from "./components/Footer";
import TelaInicial from "./telas/TelaInicial";
import TelaProjeto from "./telas/TelaProjeto";
import TelaSaibaMais from "./telas/TelaSaibaMais";
import TelaSobre from "./telas/TelaSobre";
import TelaFuncionalidade from "./telas/TelaFuncionalidade";

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
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TelaInicial />} />
          <Route path="projeto" element={<TelaProjeto />} />
          <Route path="saibaMais" element={<TelaSaibaMais />} />
          <Route path="sobre" element={<TelaSobre />} />
          <Route path="aplicacao" element={<TelaFuncionalidade />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
