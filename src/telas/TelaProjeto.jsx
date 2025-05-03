import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function TelaProjeto() {
  const [painelSelecionado, setPainelSelecionado] = useState(null);

  const paineis = [
    {
      tipo: "Monocristalino",
      eficiencia: 21.76,
      geracaoDiaria45: 1.66,
      geracaoDiaria65: 2.4,
      geracaoMensal45: 49.7,
      geracaoMensal65: 72.1,
      custo: "Alto",
      vidaUtil: "25-30 anos",
      temperaturaCoef: "-0,35%/°C",
      aplicacoes: "Residencial, comercial, usinas",
      vantagens:
        "Alta eficiência, menor espaço necessário, bom desempenho em luz direta",
      desvantagens: "Custo mais elevado, produção com maior pegada de carbono",
      descricao:
        "Painéis monocristalinos são feitos de silício de alta pureza. As células têm um único cristal contínuo, permitindo que os elétrons tenham mais espaço para se mover. Possuem aparência uniforme de cor preta e cantos arredondados. São os painéis mais eficientes do mercado para produção em larga escala.",
    },
    {
      tipo: "Policristalino",
      eficiencia: 19.41,
      geracaoDiaria45: 1.49,
      geracaoDiaria65: 2.14,
      geracaoMensal45: 44.7,
      geracaoMensal65: 64.2,
      custo: "Médio",
      vidaUtil: "25-30 anos",
      temperaturaCoef: "-0,40%/°C",
      aplicacoes: "Residencial, comercial, usinas",
      vantagens: "Bom custo-benefício, processo de fabricação mais simples",
      desvantagens: "Eficiência menor que monocristalino, ocupa mais espaço",
      descricao:
        "Painéis policristalinos são fabricados com silício fundido em blocos, resultando em múltiplos cristais. São reconhecíveis pela aparência azulada com padrões cristalinos variados. O processo de fabricação é mais simples que o dos painéis monocristalinos, resultando em um custo menor, mas com uma eficiência ligeiramente inferior.",
    },
    {
      tipo: "Silício Amorfo (a-Si)",
      eficiencia: 6.65,
      geracaoDiaria45: 0.51,
      geracaoDiaria65: 0.73,
      geracaoMensal45: 15.3,
      geracaoMensal65: 21.9,
      custo: "Baixo",
      vidaUtil: "10-20 anos",
      temperaturaCoef: "-0,20%/°C",
      aplicacoes: "Calculadoras, produtos portáteis, BIPV",
      vantagens:
        "Flexível, leve, funciona bem em luz difusa e alta temperatura",
      desvantagens: "Baixa eficiência, requer mais área, degradação inicial",
      descricao:
        "O silício amorfo utiliza silício não cristalino depositado em finas camadas sobre diversos substratos. Não possui estrutura cristalina definida, o que permite a criação de painéis flexíveis e leves. Funciona melhor que outros tipos em condições de pouca luz ou luz difusa, mas tem eficiência significativamente menor.",
    },
    {
      tipo: "Telureto de Cádmio (CdTe)",
      eficiencia: 9.0,
      geracaoDiaria45: 0.69,
      geracaoDiaria65: 0.99,
      geracaoMensal45: 20.7,
      geracaoMensal65: 29.6,
      custo: "Baixo",
      vidaUtil: "20-25 anos",
      temperaturaCoef: "-0,25%/°C",
      aplicacoes: "Usinas solares de grande escala",
      vantagens: "Baixo custo de produção, bom em altas temperaturas",
      desvantagens: "Uso de cádmio (tóxico), eficiência moderada",
      descricao:
        "Os painéis de Telureto de Cádmio (CdTe) são feitos com uma fina camada do composto semicondutor entre duas camadas condutoras. Esta tecnologia de filme fino tem o menor custo e a menor pegada de carbono entre os painéis comerciais. No entanto, o cádmio é um material tóxico, exigindo cuidados especiais na reciclagem.",
    },
    {
      tipo: "CIGS / CIS",
      eficiencia: 12.47,
      geracaoDiaria45: 0.95,
      geracaoDiaria65: 1.38,
      geracaoMensal45: 28.4,
      geracaoMensal65: 41.4,
      custo: "Médio-alto",
      vidaUtil: "20-25 anos",
      temperaturaCoef: "-0,30%/°C",
      aplicacoes: "BIPV, aplicações flexíveis",
      vantagens: "Flexível, melhor eficiência entre filmes finos",
      desvantagens:
        "Processo de fabricação complexo, custo mais alto que outros filmes finos",
      descricao:
        "Os painéis CIGS (Cobre, Índio, Gálio e Selênio) oferecem a maior eficiência entre as tecnologias de filme fino. Podem ser depositados em substratos flexíveis, permitindo aplicações versáteis. Têm melhor desempenho em condições de baixa luminosidade em comparação ao silício cristalino, mas com um processo de fabricação mais complexo.",
    },
    {
      tipo: "Orgânicas (OPV)",
      eficiencia: 5.0,
      geracaoDiaria45: 0.38,
      geracaoDiaria65: 0.55,
      geracaoMensal45: 11.5,
      geracaoMensal65: 16.5,
      custo: "Médio-baixo",
      vidaUtil: "5-10 anos",
      temperaturaCoef: "-0,20%/°C",
      aplicacoes: "Dispositivos portáteis, BIPV, IoT, wearables",
      vantagens: "Flexível, leve, semitransparente, baixo impacto ambiental",
      desvantagens: "Baixa eficiência, vida útil curta, degradação rápida",
      descricao:
        "Células solares orgânicas utilizam polímeros condutores ou pequenas moléculas orgânicas para absorver luz. São extremamente leves e podem ser semitransparentes, permitindo integração em janelas e fachadas. Embora tenham eficiência baixa e vida útil mais curta, são fabricadas com materiais abundantes e processos de baixo impacto ambiental.",
    },
    {
      tipo: "Híbrido HJT (HIT)",
      eficiencia: 24.24,
      geracaoDiaria45: 1.86,
      geracaoDiaria65: 2.68,
      geracaoMensal45: 55.7,
      geracaoMensal65: 80.4,
      custo: "Alto",
      vidaUtil: "25-30 anos",
      temperaturaCoef: "-0,25%/°C",
      aplicacoes: "Residencial e comercial premium",
      vantagens: "Alta eficiência, excelente desempenho em alta temperatura",
      desvantagens: "Custo elevado, fabricação complexa",
      descricao:
        "A tecnologia HJT (Heterojunction Technology) combina silício cristalino com camadas finas de silício amorfo. Esta combinação permite captar mais luz solar e reduz a perda de elétrons nas bordas. Tem excelente coeficiente de temperatura, mantendo alta performance mesmo em dias quentes, mas com processo de fabricação mais complexo e custos mais elevados.",
    },
    {
      tipo: "Bifacial (Mono base +10%)",
      eficiencia: 23.94,
      geracaoDiaria45: 1.84,
      geracaoDiaria65: 2.64,
      geracaoMensal45: 55.2,
      geracaoMensal65: 79.2,
      custo: "Alto",
      vidaUtil: "30+ anos",
      temperaturaCoef: "-0,35%/°C",
      aplicacoes: "Usinas solares, instalações sobre superfícies reflexivas",
      vantagens: "Captação de luz dos dois lados, maior produção total",
      desvantagens: "Requer instalação específica, custo mais elevado",
      descricao:
        "Painéis bifaciais captam luz solar de ambos os lados, aproveitando a reflexão do solo ou de outras superfícies. Podem aumentar a produção em 5-30% dependendo da superfície e instalação. Geralmente utilizam células monocristalinas de alta eficiência, com vidro nos dois lados ao invés de backsheet no lado posterior.",
    },
    {
      tipo: "Perovskita (tandem)",
      eficiencia: 29.41,
      geracaoDiaria45: 2.25,
      geracaoDiaria65: 3.25,
      geracaoMensal45: 67.5,
      geracaoMensal65: 97.5,
      custo: "Alto (em desenvolvimento)",
      vidaUtil: "10-15 anos (em desenvolvimento)",
      temperaturaCoef: "-0,20%/°C",
      aplicacoes: "Residencial e comercial premium (futuro)",
      vantagens:
        "Altíssima eficiência, processo de fabricação potencialmente simples",
      desvantagens:
        "Estabilidade ainda em desenvolvimento, durabilidade limitada",
      descricao:
        "A tecnologia de perovskita representa a fronteira da pesquisa em energia solar. As células tandem combinam perovskita com silício para absorver diferentes partes do espectro solar. Têm potencial para superar significativamente a eficiência do silício, com processo de fabricação potencialmente mais simples e barato, mas ainda enfrentam desafios de estabilidade e durabilidade.",
    },
    {
      tipo: "Quantum Dots",
      eficiencia: 10.0,
      geracaoDiaria45: 0.77,
      geracaoDiaria65: 1.11,
      geracaoMensal45: 23.1,
      geracaoMensal65: 33.3,
      custo: "Alto (em desenvolvimento)",
      vidaUtil: "Em desenvolvimento",
      temperaturaCoef: "-0,30%/°C",
      aplicacoes: "BIPV, janelas inteligentes (futuro)",
      vantagens: "Ajustável ao espectro, potencial para transparência",
      desvantagens: "Tecnologia emergente, eficiência ainda moderada",
      descricao:
        "Painéis com pontos quânticos (quantum dots) utilizam nanopartículas semicondutoras que podem ser ajustadas para absorver comprimentos de onda específicos da luz solar. Isso permite criar painéis semitransparentes e coloridos. A tecnologia está em estágio inicial, mas tem grande potencial para integração em edifícios e janelas inteligentes.",
    },
    {
      tipo: "Transparentes",
      eficiencia: 5.35,
      geracaoDiaria45: 0.41,
      geracaoDiaria65: 0.59,
      geracaoMensal45: 12.5,
      geracaoMensal65: 17.8,
      custo: "Médio-alto",
      vidaUtil: "15-20 anos",
      temperaturaCoef: "-0,20%/°C",
      aplicacoes: "Janelas, fachadas, estufas",
      vantagens: "Integração arquitetônica, uso duplo do espaço",
      desvantagens:
        "Baixa eficiência, compromisso entre transparência e geração",
      descricao:
        "Painéis transparentes permitem a passagem parcial da luz visível enquanto convertem principalmente a radiação ultravioleta e infravermelha. São ideais para integração em janelas e fachadas de edifícios. Existe um compromisso entre transparência e eficiência: quanto mais transparente, menor a capacidade de geração de energia.",
    },
    {
      tipo: "CPV (Concentrado)",
      eficiencia: 44.41,
      geracaoDiaria45: 3.34,
      geracaoDiaria65: 4.91,
      geracaoMensal45: 100.3,
      geracaoMensal65: 147.3,
      custo: "Muito alto",
      vidaUtil: "25-30 anos",
      temperaturaCoef: "-0,05%/°C",
      aplicacoes: "Usinas em regiões de alta irradiação direta",
      vantagens:
        "Eficiência extremamente alta, menor uso de material semicondutor",
      desvantagens:
        "Requer rastreamento solar, só funciona com luz direta, alto custo",
      descricao:
        "Sistemas CPV (Concentrated Photovoltaics) usam lentes ou espelhos para concentrar a luz solar em células de altíssima eficiência. Podem alcançar eficiências superiores a 40%, mas requerem rastreamento solar preciso e funcionam apenas com luz solar direta. São adequados para regiões com alta incidência de luz direta e céu limpo durante a maior parte do ano.",
    },
  ];

  const handleChangePainel = (e) => {
    const painelEscolhido = paineis.find((p) => p.tipo === e.target.value);
    setPainelSelecionado(painelEscolhido);
  };

  const dadosGrafico = paineis.map((painel) => ({
    nome: painel.tipo.split(" ")[0], // Pega apenas a primeira palavra para o gráfico
    eficiencia: painel.eficiencia,
    geracao45: painel.geracaoMensal45,
    geracao65: painel.geracaoMensal65,
  }));

  const dadosGraficoSelecionado = painelSelecionado
    ? [
        {
          nome: "4,5 kWh/m²",
          "Geração Diária": painelSelecionado.geracaoDiaria45,
          "Geração Mensal": painelSelecionado.geracaoMensal45 / 30,
        },
        {
          nome: "6,5 kWh/m²",
          "Geração Diária": painelSelecionado.geracaoDiaria65,
          "Geração Mensal": painelSelecionado.geracaoMensal65 / 30,
        },
      ]
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex flex-col pt-16 p-8">
      <div className="p-6 max-w-7xl mx-auto w-full bg-indigo-100/10 backdrop-blur-md rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center mb-6 text-yellow-300">
          Visualizador de Painéis Solares
        </h1>

        <div className="mb-6">
          <label className="block text-yellow-200 mb-2 font-medium">
            Selecione o tipo de painel:
          </label>
          <select
            className="w-full p-2 border border-purple-400 rounded-md bg-indigo-900/70 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={handleChangePainel}
            defaultValue=""
          >
            <option value="" disabled>
              Escolha um tipo de painel
            </option>
            {paineis.map((painel) => (
              <option key={painel.tipo} value={painel.tipo}>
                {painel.tipo}
              </option>
            ))}
          </select>
        </div>

        {!painelSelecionado && (
          <div className="bg-indigo-900/40 p-4 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4 text-center text-yellow-300">
              Comparativo de Eficiência de Painéis
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={dadosGrafico}
                  margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#6366f1" />
                  <XAxis
                    dataKey="nome"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                    tick={{ fill: '#e0e7ff' }}
                  />
                  <YAxis
                    label={{
                      value: "Eficiência (%)",
                      angle: -90,
                      position: "insideLeft",
                      fill: '#e0e7ff'
                    }}
                    tick={{ fill: '#e0e7ff' }}
                  />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, "Eficiência"]}
                    contentStyle={{ backgroundColor: '#312e81', borderColor: '#4f46e5', color: '#e0e7ff' }}
                  />
                  <Bar
                    dataKey="eficiencia"
                    fill="#FFCC00"
                    name="Eficiência (%)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-purple-200 mt-4">
              Selecione um tipo de painel para ver detalhes específicos
            </p>
          </div>
        )}

{painelSelecionado && (
          <>
            <div className="bg-indigo-900/40 p-6 rounded-lg shadow-xl mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-300">
                {painelSelecionado.tipo}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="bg-indigo-800/50 p-4 rounded-lg mb-4 border border-purple-500">
                    <h3 className="font-medium text-yellow-200 mb-2">
                      Especificações Técnicas
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <p>
                        <span className="font-semibold text-purple-200">Eficiência:</span>{" "}
                        <span className="text-white">{painelSelecionado.eficiencia}%</span>
                      </p>
                      <p>
                        <span className="font-semibold text-purple-200">Custo:</span>{" "}
                        <span className="text-white">{painelSelecionado.custo}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-purple-200">Vida útil:</span>{" "}
                        <span className="text-white">{painelSelecionado.vidaUtil}</span>
                      </p>
                      <p>
                        <span className="font-semibold text-purple-200">
                          Coef. temperatura:
                        </span>{" "}
                        <span className="text-white">{painelSelecionado.temperaturaCoef}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-800/40 p-4 rounded-lg border border-yellow-300/50">
                    <h3 className="font-medium text-yellow-200 mb-2">
                      Geração de Energia
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <h4 className="text-sm font-medium text-purple-200">
                          Irradiação 4,5 kWh/m²
                        </h4>
                        <p>
                          <span className="font-semibold text-indigo-200">Diária:</span>{" "}
                          <span className="text-white">{painelSelecionado.geracaoDiaria45} kWh</span>
                        </p>
                        <p>
                          <span className="font-semibold text-indigo-200">Mensal:</span>{" "}
                          <span className="text-white">{painelSelecionado.geracaoMensal45} kWh</span>
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-purple-200">
                          Irradiação 6,5 kWh/m²
                        </h4>
                        <p>
                          <span className="font-semibold text-indigo-200">Diária:</span>{" "}
                          <span className="text-white">{painelSelecionado.geracaoDiaria65} kWh</span>
                        </p>
                        <p>
                          <span className="font-semibold text-indigo-200">Mensal:</span>{" "}
                          <span className="text-white">{painelSelecionado.geracaoMensal65} kWh</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-64">
                  <h3 className="font-medium text-yellow-200 mb-2">
                    Geração de Energia
                  </h3>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                      data={dadosGraficoSelecionado}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#6366f1" />
                      <XAxis dataKey="nome" tick={{ fill: '#e0e7ff' }} />
                      <YAxis tick={{ fill: '#e0e7ff' }} />
                      <Tooltip contentStyle={{ backgroundColor: '#312e81', borderColor: '#4f46e5', color: '#e0e7ff' }} />
                      <Legend wrapperStyle={{ color: '#e0e7ff' }} />
                      <Bar
                        dataKey="Geração Diária"
                        fill="#FFCC00"
                        name="Geração Diária (kWh)"
                      />
                      <Bar
                        dataKey="Geração Mensal"
                        fill="#FF9933"
                        name="Geração Mensal (kWh/dia)"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium text-yellow-200 mb-2">
                  Características
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <p>
                      <span className="font-semibold text-orange-200">Aplicações:</span>{" "}
                      <span className="text-white">{painelSelecionado.aplicacoes}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-orange-200">Vantagens:</span>{" "}
                      <span className="text-white">{painelSelecionado.vantagens}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-orange-200">Desvantagens:</span>{" "}
                      <span className="text-white">{painelSelecionado.desvantagens}</span>
                    </p>
                  </div>
                  <div className="bg-indigo-800/60 p-4 rounded border border-purple-500">
                    <p className="italic text-purple-100">
                      {painelSelecionado.descricao}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-900/40 p-6 rounded-lg shadow-xl">
              <h3 className="font-medium text-yellow-300 mb-4">
                Comparação com outros painéis
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dadosGrafico}
                    margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#6366f1" />
                    <XAxis
                      dataKey="nome"
                      angle={-45}
                      textAnchor="end"
                      height={70}
                      tick={{ fill: '#e0e7ff' }}
                    />
                    <YAxis
                      label={{
                        value: "Geração Mensal (kWh)",
                        angle: -90,
                        position: "insideLeft",
                        fill: '#e0e7ff'
                      }}
                      tick={{ fill: '#e0e7ff' }}
                    />
                    <Tooltip contentStyle={{ backgroundColor: '#312e81', borderColor: '#4f46e5', color: '#e0e7ff' }} />
                    <Legend wrapperStyle={{ color: '#e0e7ff' }} />
                    <Bar
                      dataKey="geracao45"
                      fill="#FFCC00"
                      name="Geração Mensal 4,5 kWh/m²"
                    />
                    <Bar
                      dataKey="geracao65"
                      fill="#FF9933"
                      name="Geração Mensal 6,5 kWh/m²"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TelaProjeto;
