import { Leaf, Sun, ShieldCheck, BarChart3, Clock3 } from "lucide-react";

export default function TelaSobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-50 text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="bg-white rounded-xl p-8 shadow-md text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
            Energia Solar: Um Futuro Sustentável Começa Agora
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            A transição energética está em nossas mãos. Com o uso de painéis
            solares, você economiza, valoriza seu imóvel e ainda ajuda o
            planeta.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <Sun size={40} className="text-yellow-400 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Fonte Inesgotável</h3>
            <p className="text-gray-600">
              A energia solar é abundante e gratuita — o sol brilha todos os
              dias, mesmo em dias nublados.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <Leaf size={40} className="text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">
              Baixo Impacto Ambiental
            </h3>
            <p className="text-gray-600">
              Reduz a emissão de CO₂ e contribui para frear o aquecimento
              global.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <ShieldCheck size={40} className="text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Autonomia e Economia</h3>
            <p className="text-gray-600">
              Gere sua própria energia e reduza até 95% da conta de luz mensal.
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-green-700">
            Por que energia solar?
          </h2>
          <p>
            A energia solar é uma das principais alternativas sustentáveis para
            a matriz energética global. Ela é limpa, abundante, renovável e pode
            ser utilizada tanto em pequenas residências quanto em grandes
            indústrias. De acordo com a{" "}
            <strong>Agência Nacional de Energia Elétrica (ANEEL)</strong>, o
            Brasil ultrapassou, em 2023, a marca de 2 milhões de sistemas
            solares fotovoltaicos instalados.
          </p>
          <p>
            Segundo a <strong>ABSOLAR</strong>, a energia solar já representa
            mais de 11% da matriz elétrica nacional e evita a emissão de mais de{" "}
            <strong>31 milhões de toneladas de CO₂</strong>.
          </p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-green-700">
            Benefícios do uso de energia solar
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Redução na conta de luz:</strong> Economia de até 95% na
              fatura mensal.
            </li>
            <li>
              <strong>Sustentabilidade ambiental:</strong> Menor impacto
              ambiental e redução do uso de combustíveis fósseis.
            </li>
            <li>
              <strong>Valorização do imóvel:</strong> Pode aumentar o valor da
              propriedade em até 10%.
            </li>
            <li>
              <strong>Vida útil:</strong> Sistemas duram de 25 a 30 anos com
              baixa manutenção.
            </li>
            <li>
              <strong>Independência energética:</strong> Produção própria de
              energia limpa.
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
            <Clock3 size={24} /> Linha do Tempo da Energia Solar
          </h2>
          <ul className="space-y-3 list-disc pl-6 text-gray-700">
            <li>
              <strong>1839:</strong> Efeito fotovoltaico descoberto por
              Alexandre Edmond Becquerel.
            </li>
            <li>
              <strong>1954:</strong> Primeira célula solar de silício criada nos
              laboratórios Bell.
            </li>
            <li>
              <strong>1970–1990:</strong> Aplicações em satélites e áreas
              remotas.
            </li>
            <li>
              <strong>2000 em diante:</strong> Expansão global comercial e
              industrial.
            </li>
            <li>
              <strong>Hoje:</strong> Fonte de energia limpa em crescimento
              acelerado.
            </li>
          </ul>
        </section>

        <section className="grid md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-md">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">
              <BarChart3 size={24} /> Fatos Interessantes
            </h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>O Brasil tem um dos maiores potenciais solares do mundo.</li>
              <li>
                Mais de 2 milhões de sistemas solares foram instalados até 2024.
              </li>
              <li>Casas com energia solar podem se valorizar em até 10%.</li>
              <li>Painéis solares têm durabilidade média de 25 anos.</li>
              <li>Evita emissão de milhões de toneladas de CO₂ por ano.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-green-700">Cenário global</h2>
          <p>
            A <strong>Agência Internacional de Energia (IEA)</strong> prevê que,
            até 2050, a energia solar será a principal fonte de eletricidade do
            mundo, liderando a transição energética. O custo da geração solar
            caiu mais de 80% na última década.
          </p>
        </section>

        <section className="text-center px-4 py-8 bg-green-50 rounded-xl mb-10 shadow-inner">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Faça parte da mudança!
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Cada ação conta. Ao investir em energia solar, você contribui com um
            mundo mais limpo, econômico e inteligente. Vamos juntos construir um
            futuro movido a energia limpa!
          </p>
        </section>

        <footer className="pt-8 text-sm text-blue-900">
          <h3 className="font-semibold text-lg mb-2">Referências:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <a
                href="https://www.aneel.gov.br/web/guest/geracao-distribuida"
                target="_blank"
                className="underline"
              >
                ANEEL – Geração Distribuída
              </a>
            </li>
            <li>
              <a
                href="https://www.absolar.org.br/"
                target="_blank"
                className="underline"
              >
                ABSOLAR – Associação Brasileira de Energia Solar
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.br/mme/pt-br"
                target="_blank"
                className="underline"
              >
                Ministério de Minas e Energia
              </a>
            </li>
            <li>
              <a
                href="https://www.iea.org/reports/solar-energy"
                target="_blank"
                className="underline"
              >
                IEA – International Energy Agency
              </a>
            </li>
            <li>
              <a
                href="https://www.greenpeace.org/brasil/"
                target="_blank"
                className="underline"
              >
                Greenpeace Brasil
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
