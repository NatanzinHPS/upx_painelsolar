import React from "react";
import { Sun, ArrowRight, BarChart3, Zap, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TelaInicial() {
  const navigate = useNavigate();

  const navegarParaDashboard = () => {
    navigate("/projeto");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex flex-col items-center justify-start text-white p-4 pt-32">
      <div className="max-w-6xl w-full bg-indigo-900/40 backdrop-blur-md rounded-2xl p-8 shadow-2xl animate-fadeIn">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Sun
              size={80}
              className="text-yellow-400 animate-pulse drop-shadow-lg"
            />
            <Zap
              size={24}
              className="absolute top-0 right-0 text-yellow-300 animate-bounce"
            />
            <Leaf
              size={24}
              className="absolute bottom-0 left-0 text-green-400 animate-spin-slow"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Energia Solar:{" "}
          <span className="text-yellow-300">Potência e Eficiência</span>
        </h1>
        <p className="text-xl text-center text-indigo-100 mb-8">
          Descubra os painéis solares mais eficientes do mercado e compare seu
          desempenho para fazer a escolha ideal para seu projeto de energia
          renovável.
        </p>

        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
            {[
              {
                icon: <Zap size={32} className="text-yellow-300" />,
                title: "Eficiência Superior",
                text: "Conheça painéis com até 44% de eficiência",
              },
              {
                icon: <BarChart3 size={32} className="text-orange-400" />,
                title: "Dados Comparativos",
                text: "Analise e compare o desempenho de 12 tipos de painéis",
              },
              {
                icon: <Leaf size={32} className="text-purple-300" />,
                title: "Energia Limpa",
                text: "Contribua para um futuro sustentável",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-indigo-700/30 rounded-lg p-4 text-center hover:scale-105 hover:bg-indigo-600/40 transition duration-300 ease-in-out border border-purple-500"
              >
                <div className="flex justify-center mb-2">{card.icon}</div>
                <h3 className="font-bold mb-1">{card.title}</h3>
                <p className="text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={navegarParaDashboard}
            className="bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center mx-auto ring-2 ring-orange-300"
          >
            <span className="mr-2">Explorar Dashboard</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TelaInicial;
