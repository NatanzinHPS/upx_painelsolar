# RenovaEnergy ⚡
Uma aplicação web educacional e interativa para explorar tecnologias de energia solar fotovoltaica.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0+-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-Data%20Visualization-FF6B6B?style=flat)

## 🌟 Visão Geral
O **RenovaEnergy** é uma plataforma interativa que permite aos usuários explorar e comparar diferentes tipos de painéis solares, visualizar dados de eficiência energética e aprender sobre os benefícios da energia solar renovável.

### ✨ Principais Funcionalidades
- **12 Tipos de Painéis Solares**: Comparação detalhada entre diferentes tecnologias
- **Gráficos Interativos**: Visualizações dinâmicas de eficiência e geração energética
- **Calculadora de Eficiência**: Comparação de geração em diferentes condições de irradiação
- **Calculadora Solar**: Sistema completo de planejamento de investimento em energia solar
- **Base de Conhecimento**: Informações educacionais sobre energia solar
- **Design Responsivo**: Interface adaptável para desktop e mobile

## 🚀 Demo
[Link do Deploy](https://natanzinhps.github.io/upx_painelsolar/#/) 

## 🧮 Calculadora Solar
A **Calculadora Solar** é uma funcionalidade que permite:

### Configuração Personalizada
- **Consumo Mensal**: Definição do consumo energético em kWh
- **Tarifa Energética**: Valor cobrado por kWh na região
- **Orçamento**: Investimento total disponível
- **Seleção de Painéis**: 4 modelos otimizados para diferentes necessidades

### Modelos de Painéis da Calculadora
1. **Painel Monocristalino 450W** - R$ 1.200 | 21.5% eficiência
2. **Painel Policristalino 400W** - R$ 950 | 18.5% eficiência  
3. **Painel Bifacial 500W** - R$ 1.500 | 22.8% eficiência
4. **Painel PERC 420W** - R$ 1.100 | 20.2% eficiência

### Análises Fornecidas
- **Retorno do Investimento**: Cálculo preciso do payback
- **Cobertura Energética**: Percentual do consumo atendido
- **Projeções Financeiras**: Economia em 5, 10 e 20 anos
- **Detalhes Técnicos**: Potência, área ocupada, geração mensal
- **Comparações**: Painéis necessários vs. painéis no orçamento

## 🛠️ Tecnologias Utilizadas
- **React 18+** - Framework JavaScript
- **React Router DOM** - Roteamento client-side
- **TailwindCSS** - Framework CSS utilitário
- **Recharts** - Biblioteca de gráficos
- **Lucide React** - Ícones SVG
- **Vite** - Build tool e dev server

## ⚙️ Instalação e Execução

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Passos
1. **Clone o repositório**
```bash
git clone https://github.com/NatanzinHPS/upx_painelsolar.git
cd upx_painelsolar
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 📁 Estrutura do Projeto
```
src/
├── components/          # Componentes reutilizáveis
│   ├── Footer.jsx
│   └── Navegacao.jsx
├── telas/              # Páginas da aplicação
│   ├── TelaFuncionalidade.jsx    # Calculadora de investimento em painéis
│   ├── TelaInicial.jsx           # Tela inicial
│   ├── TelaProjeto.jsx          # Visualizador de painéis
│   ├── TelaSaibaMais.jsx        # Base de conhecimento
│   └── TelaSobre.jsx            # Sobre a equipe
├── images/             # Assets de imagem
└── App.jsx             # Componente raiz
```

## 🤝 Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença
Este projeto é desenvolvido para fins educacionais. Todos os direitos reservados à equipe RenovaEnergy™ 2025.

## 📚 Referências
- [ANEEL - Agência Nacional de Energia Elétrica](https://www.aneel.gov.br)
- [ABSOLAR - Associação Brasileira de Energia Solar](https://www.absolar.org.br)
- [IEA - International Energy Agency](https://www.iea.org)

---
**🌱 Promovendo energia sustentável através da educação e tecnologia**
