import { useState } from "react";

function TelaSobre() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: "Natan Henrique",
      role: "",
      description: "",
      image: "",
    },
    {
      name: "Herick Marlon",
      role: "",
      description: "",
      image: "",
    },
    {
      name: "Enzo Castanho",
      role: "",
      description: "",
      image: "",
    },
    {
      name: "João Gabriel",
      role: "",
      description: "",
      image: "",
    },
    {
      name: "João Henrique",
      role: "",
      description: "",
      image: "",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <div className="md:w-1/2">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#6633CC" }}
            >
              Quem Somos
            </h2>
            <p className="text-lg mb-4">
              Somos um grupo de 5 estudantes do curso de Análise e
              Desenvolvimento de Sistemas, unidos pela paixão por tecnologia e
              pela vontade de contribuir com soluções que promovam um futuro
              mais sustentável.
            </p>
            <p className="text-lg mb-4">
              Nosso projeto tem como foco incentivar o uso de painéis solares,
              mostrando, por meio da tecnologia, os benefícios ambientais e
              econômicos da energia solar. Para isso, desenvolvemos uma
              aplicação web que une um front-end moderno e responsivo —
              construído com React e TailwindCSS — com a exibição de dados e
              gráficos interativos que facilitam a compreensão e engajamento dos
              usuários.
            </p>
            <p className="text-lg">
              Mais do que um trabalho acadêmico, este projeto representa nosso
              compromisso com a inovação consciente e com o uso da tecnologia
              como ferramenta de impacto social e ambiental positivo.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div
              className="rounded-lg overflow-hidden shadow-xl"
              style={{ backgroundColor: "#FF9933" }}
            >
              <img
                src="/api/placeholder/500/300"
                alt="Grupo trabalhando junto"
                className="w-full"
              />
              <div className="p-4 text-center">
                <p className="text-white font-semibold">
                  Nossa equipe completa reunida
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mb-16 text-center p-8 rounded-lg"
          style={{ backgroundColor: "rgba(102, 51, 204, 0.1)" }}
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#6633CC" }}>
            Nossa Missão
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Criar soluções tecnológicas que contribuam para a conscientização e
            adoção de fontes de energia sustentável, com foco no uso de painéis
            solares. Buscamos unir o conhecimento técnico em desenvolvimento de
            sistemas com a apresentação clara de dados e estatísticas,
            oferecendo ferramentas acessíveis, informativas e visualmente
            intuitivas que ajudem usuários a entender os benefícios e impactos
            do uso da energia solar.
          </p>
        </div>

        <div>
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#6633CC" }}
          >
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative z-10 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor:
                    hoveredMember === index ? "#6633CC" : "white",
                  borderTop: `4px solid #FFCC00`,
                }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="flex justify-center pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full h-32 w-32 object-cover border-4"
                    style={{ borderColor: "#FFCC00" }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{
                      color: hoveredMember === index ? "white" : "#4B0082",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="font-semibold mb-3"
                    style={{
                      color: hoveredMember === index ? "#FFCC00" : "#FF9933",
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      color: hoveredMember === index ? "white" : "#333333",
                    }}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: "#6633CC" }}
          >
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "rgba(255, 204, 0, 0.1)" }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#4B0082" }}
              >
                Sustentabilidade
              </h3>
              <p>
                Acreditamos que a tecnologia deve ser uma aliada na construção
                de um futuro mais limpo e responsável. Nosso projeto tem como
                base o compromisso com práticas que respeitam o meio ambiente.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "rgba(255, 153, 51, 0.1)" }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#4B0082" }}
              >
                Colaboração
              </h3>
              <p>
                Acreditamos que as melhores soluções surgem do trabalho em
                equipe, onde diferentes perspectivas se complementam para criar
                resultados superiores.
              </p>
            </div>
            <div
              className="p-6 rounded-lg shadow-md"
              style={{ backgroundColor: "rgba(102, 51, 204, 0.1)" }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#4B0082" }}
              >
                Evolução Constante
              </h3>
              <p>
                Estamos em constante aprendizado e buscamos aperfeiçoar nossas
                habilidades a cada etapa, tanto na parte técnica quanto na nossa
                visão crítica sobre o papel da tecnologia na sociedade.
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-16 text-center py-10 px-4 rounded-lg"
          style={{ backgroundColor: "#4B0082" }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Acesse nosso repositório no GitHub!
          </h2>
          <p className="text-lg text-white mb-6">
            Todo o código deste projeto está disponível em nosso repositório.
            Confira nossa implementação, contribua com sugestões ou faça um fork
            para seus próprios estudos.
          </p>
          <a
            href="https://github.com/NatanzinHPS/upx_painelsolar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full font-bold transition-all hover:shadow-lg"
            style={{ backgroundColor: "#FFCC00", color: "#4B0082" }}
          >
            Ver Código no GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default TelaSobre;
