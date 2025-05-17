import { Link } from "react-router-dom";

function Navegacao() {
  return (
    <nav className="sticky top-0 bg-yellow-400 shadow-md w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-gray-800 hover:text-black transition-colors duration-300">
            RenovaEnergy
          </span>
        </Link>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/projeto"
              className="hover:text-black transition-colors duration-300"
            >
              Painéis
            </Link>
          </li>
          <li>
            <Link
              to="/funcionalidade"
              className="hover:text-black transition-colors duration-300"
            >
              Funcionalidade
            </Link>
          </li>
          <li>
            <Link
              to="/saibaMais"
              className="hover:text-black transition-colors duration-300"
            >
              Saiba Mais
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="hover:text-black transition-colors duration-300"
            >
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navegacao;
