import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

function Navegacao() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="sticky top-0 z-50 bg-yellow-400 shadow-md w-full">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-gray-800 hover:text-black transition-colors duration-300">
            RenovaEnergy
          </span>
        </Link>


        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>


        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><Link to="/projeto" className="hover:text-black transition-colors duration-300">Painéis</Link></li>
          <li><Link to="/aplicacao" className="hover:text-black transition-colors duration-300">Aplicação</Link></li>
          <li><Link to="/saibaMais" className="hover:text-black transition-colors duration-300">Saiba Mais</Link></li>
          <li><Link to="/sobre" className="hover:text-black transition-colors duration-300">Sobre</Link></li>
        </ul>
      </div>


      {menuAberto && (
        <div className="md:hidden bg-yellow-400 pt-2 px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-gray-700 font-medium">
            <li><Link to="/projeto" onClick={toggleMenu} className="block hover:text-black">Painéis</Link></li>
            <li><Link to="/aplicacao" onClick={toggleMenu} className="block hover:text-black">Aplicação</Link></li>
            <li><Link to="/saibaMais" onClick={toggleMenu} className="block hover:text-black">Saiba Mais</Link></li>
            <li><Link to="/sobre" onClick={toggleMenu} className="block hover:text-black">Sobre</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navegacao;
