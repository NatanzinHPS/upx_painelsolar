import { useState, useEffect } from "react";
import {
  Sun,
  Battery,
  Clock,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Zap,
  DollarSign,
  Info,
} from "lucide-react";

// Definindo a paleta de cores do Esquema Complementar Equilibrado
const cores = {
  amareloVibrante: "#FFCC00",
  laranjaSuave: "#FF9933",
  violetaModerado: "#6633CC",
  azulVioleta: "#4B0082",
  branco: "#FFFFFF",
};

// Mantendo a mesma estrutura dos painéis solares
const paineisSolares = [
  {
    nome: "Painel Monocristalino 450W",
    potencia: 450,
    eficiencia: 21.5,
    vidaUtil: 25,
    precoUnidade: 1200,
    areaOcupada: 2.2,
    geracaoMediaDiaria: 1.8,
  },
  {
    nome: "Painel Policristalino 400W",
    potencia: 400,
    eficiencia: 18.5,
    vidaUtil: 25,
    precoUnidade: 950,
    areaOcupada: 2.0,
    geracaoMediaDiaria: 1.6,
  },
  {
    nome: "Painel Bifacial 500W",
    potencia: 500,
    eficiencia: 22.8,
    vidaUtil: 30,
    precoUnidade: 1500,
    areaOcupada: 2.3,
    geracaoMediaDiaria: 2.2,
  },
  {
    nome: "Painel PERC 420W",
    potencia: 420,
    eficiencia: 20.2,
    vidaUtil: 25,
    precoUnidade: 1100,
    areaOcupada: 2.1,
    geracaoMediaDiaria: 1.7,
  },
];

// Componente principal
export default function CalculadoraSolar() {
  // Estados
  const [consumoMensal, setConsumoMensal] = useState(300);
  const [precoKWh, setPrecoKWh] = useState(0.65);
  const [investimento, setInvestimento] = useState(20000);
  const [painelSelecionado, setPainelSelecionado] = useState(paineisSolares[0]);
  const [resultados, setResultados] = useState(null);
  const [tab, setTab] = useState("entrada");

  // Calculadora de resultados
  useEffect(() => {
    if (consumoMensal <= 0 || precoKWh <= 0 || investimento <= 0) {
      setResultados(null);
      return;
    }

    // Cálculos
    const geracaoMensalPorPainel = painelSelecionado.geracaoMediaDiaria * 30;
    const paineisNecessarios = Math.ceil(
      consumoMensal / geracaoMensalPorPainel
    );
    const paineisCompraveis = Math.floor(
      investimento / painelSelecionado.precoUnidade
    );
    const numeroPaineis = paineisCompraveis;

    if (numeroPaineis <= 0) {
      setResultados(null);
      return;
    }

    const potenciaInstalada =
      (numeroPaineis * painelSelecionado.potencia) / 1000;
    const geracaoDiaria = numeroPaineis * painelSelecionado.geracaoMediaDiaria;
    const geracaoMensal = geracaoDiaria * 30;
    const geracaoAnual = geracaoDiaria * 365;
    const coberturaMensal = (geracaoMensal / consumoMensal) * 100;
    const economiaMensal = Math.min(geracaoMensal, consumoMensal) * precoKWh;
    const economiaAnual = Math.min(geracaoAnual, consumoMensal * 12) * precoKWh;
    const custoTotal = numeroPaineis * painelSelecionado.precoUnidade;
    const paybackAnos = custoTotal / economiaAnual;
    const areaOcupada = numeroPaineis * painelSelecionado.areaOcupada;
    const geracaoExcedenteMensal = Math.max(0, geracaoMensal - consumoMensal);
    const percentualExcedente =
      geracaoExcedenteMensal > 0
        ? (geracaoExcedenteMensal / geracaoMensal) * 100
        : 0;

    setResultados({
      numeroPaineis,
      paineisNecessarios,
      paineisCompraveis,
      potenciaInstalada,
      geracaoDiaria,
      geracaoMensal,
      geracaoAnual,
      coberturaMensal,
      economiaMensal,
      economiaAnual,
      custoTotal,
      paybackAnos,
      areaOcupada,
      geracaoExcedenteMensal,
      percentualExcedente,
    });
  }, [consumoMensal, precoKWh, investimento, painelSelecionado]);

  // Formatadores
  const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const formatarNumero = (numero, casasDecimais = 2) => {
    return numero.toLocaleString("pt-BR", {
      minimumFractionDigits: casasDecimais,
      maximumFractionDigits: casasDecimais,
    });
  };

  // Componente de cartão de painel solar
  const PainelSolarCard = ({ painel }) => {
    const isSelected = painelSelecionado.nome === painel.nome;

    return (
      <div
        className={`border rounded-xl p-4 cursor-pointer transition-all ${
          isSelected
            ? "border-amber-400 bg-amber-50 shadow-md"
            : "border-gray-200 hover:border-amber-300"
        }`}
        style={
          isSelected
            ? { borderColor: cores.amareloVibrante, backgroundColor: "#FFF9E6" }
            : {}
        }
        onClick={() => setPainelSelecionado(painel)}
      >
        <div className="flex items-center mb-2">
          <Sun
            className="mr-2"
            size={20}
            style={{ color: isSelected ? cores.amareloVibrante : "#CBD5E0" }}
          />
          <h3 className="font-medium text-gray-800">{painel.nome}</h3>
        </div>

        <div className="flex justify-between text-sm mt-3">
          <span className="text-gray-500">Potência</span>
          <span className="font-medium">{painel.potencia}W</span>
        </div>

        <div className="flex justify-between text-sm mt-1">
          <span className="text-gray-500">Eficiência</span>
          <span className="font-medium">{painel.eficiencia}%</span>
        </div>

        <div className="flex justify-between text-sm mt-1">
          <span className="text-gray-500">Preço</span>
          <span className="font-medium">
            {formatarMoeda(painel.precoUnidade)}
          </span>
        </div>

        <div className="flex justify-between text-sm mt-1">
          <span className="text-gray-500">Geração</span>
          <span className="font-medium">
            {painel.geracaoMediaDiaria} kWh/dia
          </span>
        </div>
      </div>
    );
  };

  // Componente de card de resultado
  const ResultCard = ({ icon, title, value, suffix, subtitle }) => {
    return (
      <div className="bg-white rounded-xl p-4 shadow-md">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        </div>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-gray-800">{value}</span>
          {suffix && <span className="ml-1 text-gray-500">{suffix}</span>}
        </div>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <Sun
              size={48}
              className="text-amber-400"
              style={{ color: cores.amareloVibrante }}
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Calculadora Solar
          </h1>
          <p className="text-gray-600">
            Planeje seu sistema fotovoltaico com precisão
          </p>
        </header>

        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                tab === "entrada"
                  ? `bg-amber-400 text-white shadow-md`
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              style={
                tab === "entrada"
                  ? { backgroundColor: cores.amareloVibrante }
                  : {}
              }
              onClick={() => setTab("entrada")}
            >
              Dados de Entrada
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                tab === "resultados"
                  ? `bg-violet-700 text-white shadow-md`
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              style={
                tab === "resultados"
                  ? { backgroundColor: cores.violetaModerado }
                  : {}
              }
              onClick={() => setTab("resultados")}
              disabled={!resultados}
            >
              Resultados
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {tab === "entrada" && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold mb-6 text-gray-800">
                    Configure sua Instalação
                  </h2>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Consumo Mensal (kWh)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="50"
                        value={consumoMensal}
                        onChange={(e) =>
                          setConsumoMensal(
                            Math.max(0, parseFloat(e.target.value) || 0)
                          )
                        }
                        className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500">kWh</span>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 flex items-center">
                      <Info size={12} className="mr-1" />
                      Média mensal de energia consumida
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tarifa de Energia (R$/kWh)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500">R$</span>
                      </div>
                      <input
                        type="number"
                        min="0.1"
                        step="0.01"
                        value={precoKWh}
                        onChange={(e) =>
                          setPrecoKWh(
                            Math.max(0, parseFloat(e.target.value) || 0)
                          )
                        }
                        className="w-full p-3 pl-8 pr-12 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500">/kWh</span>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 flex items-center">
                      <Info size={12} className="mr-1" />
                      Valor cobrado por kWh na sua região
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Orçamento Disponível (R$)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500">R$</span>
                      </div>
                      <input
                        type="number"
                        min="5000"
                        step="1000"
                        value={investimento}
                        onChange={(e) =>
                          setInvestimento(
                            Math.max(0, parseFloat(e.target.value) || 0)
                          )
                        }
                        className="w-full p-3 pl-8 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500 flex items-center">
                      <Info size={12} className="mr-1" />
                      Valor total disponível para investimento
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-6 text-gray-800">
                    Escolha o Painel Solar
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {paineisSolares.map((painel, index) => (
                      <PainelSolarCard key={index} painel={painel} />
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-medium text-gray-800 mb-3 flex items-center">
                      <Sun
                        size={18}
                        style={{ color: cores.amareloVibrante }}
                        className="mr-2"
                      />
                      Detalhes do Painel Selecionado
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Dimensões:</span>
                        <span>
                          {formatarNumero(painelSelecionado.areaOcupada)} m²
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Vida útil:</span>
                        <span>{painelSelecionado.vidaUtil} anos</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          Fator de capacidade:
                        </span>
                        <span>
                          {formatarNumero(
                            (painelSelecionado.geracaoMediaDiaria * 100) /
                              ((painelSelecionado.potencia / 1000) * 24)
                          )}
                          %
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      className="w-full font-medium py-3 px-4 rounded-lg shadow-md transition-colors flex items-center justify-center text-white"
                      style={{
                        backgroundColor: resultados
                          ? cores.violetaModerado
                          : "#9CA3AF",
                        opacity: resultados ? 1 : 0.7,
                      }}
                      onClick={() => resultados && setTab("resultados")}
                      disabled={!resultados}
                    >
                      <BarChart3 size={18} className="mr-2" />
                      {resultados
                        ? "Ver Resultados"
                        : "Preencha os dados acima"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "resultados" && resultados && (
            <div className="p-6">
              <div className="grid grid-cols-1 gap-8">
                <div
                  className="rounded-xl shadow-lg p-6 text-white"
                  style={{
                    background: `linear-gradient(to right, ${cores.azulVioleta}, ${cores.violetaModerado})`,
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col justify-center items-center">
                      <Clock size={32} className="mb-2" />
                      <h3 className="text-lg font-medium mb-1">
                        Retorno do Investimento
                      </h3>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">
                          {formatarNumero(resultados.paybackAnos, 1)}
                        </span>
                        <span className="ml-1">anos</span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <Battery size={32} className="mb-2" />
                      <h3 className="text-lg font-medium mb-1">
                        Cobertura Energética
                      </h3>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold">
                          {formatarNumero(
                            Math.min(resultados.coberturaMensal, 100)
                          )}
                        </span>
                        <span className="ml-1">%</span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <DollarSign size={32} className="mb-2" />
                      <h3 className="text-lg font-medium mb-1">
                        Economia em {painelSelecionado.vidaUtil} Anos
                      </h3>
                      <div className="text-3xl font-bold">
                        {formatarMoeda(
                          resultados.economiaAnual * painelSelecionado.vidaUtil
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cards de resultados */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <ResultCard
                    icon={
                      <Sun size={20} style={{ color: cores.amareloVibrante }} />
                    }
                    title="Painéis Necessários"
                    value={resultados.numeroPaineis}
                    suffix="unidades"
                  />

                  <ResultCard
                    icon={
                      <Zap size={20} style={{ color: cores.laranjaSuave }} />
                    }
                    title="Potência do Sistema"
                    value={formatarNumero(resultados.potenciaInstalada)}
                    suffix="kWp"
                  />

                  <ResultCard
                    icon={
                      <BarChart3
                        size={20}
                        style={{ color: cores.violetaModerado }}
                      />
                    }
                    title="Geração Mensal"
                    value={formatarNumero(resultados.geracaoMensal)}
                    suffix="kWh"
                  />

                  <ResultCard
                    icon={
                      <DollarSign
                        size={20}
                        style={{ color: cores.laranjaSuave }}
                      />
                    }
                    title="Economia Mensal"
                    value={formatarMoeda(resultados.economiaMensal)}
                  />
                </div>

                {/* Detalhes adicionais */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Detalhes do sistema */}
                  <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <Sun size={20} className="text-amber-500 mr-2" />
                      Detalhes do Sistema
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Modelo do Painel:</span>
                        <span className="font-medium">
                          {painelSelecionado.nome}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">
                          Painéis para 100% do consumo:
                        </span>
                        <span className="font-medium">
                          {resultados.paineisNecessarios} unidades
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">
                          Painéis no orçamento:
                        </span>
                        <span className="font-medium">
                          {resultados.paineisCompraveis} unidades
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Custo unitário:</span>
                        <span className="font-medium">
                          {formatarMoeda(painelSelecionado.precoUnidade)}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">
                          Investimento total:
                        </span>
                        <span className="font-medium">
                          {formatarMoeda(resultados.custoTotal)}
                        </span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Área ocupada:</span>
                        <span className="font-medium">
                          {formatarNumero(resultados.areaOcupada)} m²
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Detalhes financeiros */}
                  <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <DollarSign size={20} className="text-green-600 mr-2" />
                      Análise Financeira
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Economia Mensal:</span>
                        <span className="font-medium text-green-600">
                          {formatarMoeda(resultados.economiaMensal)}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">Economia Anual:</span>
                        <span className="font-medium text-green-600">
                          {formatarMoeda(resultados.economiaAnual)}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">
                          Economia em 5 anos:
                        </span>
                        <span className="font-medium text-green-600">
                          {formatarMoeda(resultados.economiaAnual * 5)}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">
                          Economia em 10 anos:
                        </span>
                        <span className="font-medium text-green-600">
                          {formatarMoeda(resultados.economiaAnual * 10)}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">
                          Economia em 20 anos:
                        </span>
                        <span className="font-medium text-green-600">
                          {formatarMoeda(resultados.economiaAnual * 20)}
                        </span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">
                          Retorno do investimento:
                        </span>
                        <span className="font-medium">
                          {formatarNumero(resultados.paybackAnos, 1)} anos
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão para voltar */}
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-gray-100 text-gray-700 font-medium py-2 px-6 rounded-full hover:bg-gray-200 transition-colors flex items-center"
                    onClick={() => setTab("entrada")}
                  >
                    <ChevronDown size={18} className="mr-1" />
                    Editar Configurações
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>
            Os resultados podem variar dependendo de fatores regionais e
            condições específicas.
          </p>
        </footer>
      </div>
    </div>
  );
}
