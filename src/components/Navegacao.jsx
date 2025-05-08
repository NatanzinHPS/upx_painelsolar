function Navegacao() {
  return (
    <nav class="sticky top-0 bg-yellow-400 shadow-md w-full">
      <div class="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <a href="/" class="flex items-center space-x-2">
          <span class="text-xl font-semibold text-gray-800 hover:text-black transition-colors duration-300">
            RenovaEnergy
          </span>
        </a>
        <ul class="flex space-x-8 text-gray-700 font-medium">
          <li>
            <a
              href="/projeto"
              class="hover:text-black transition-colors duration-300"
            >
              Painéis
            </a>
          </li>
          <li>
            <a
              href="/funcionalidade"
              class="hover:text-black transition-colors duration-300"
            >
              Funcionalidade
            </a>
          </li>
          <li>
            <a
              href="/saibaMais"
              class="hover:text-black transition-colors duration-300"
            >
              Saiba Mais
            </a>
          </li>
          <li>
            <a
              href="/sobre"
              class="hover:text-black transition-colors duration-300"
            >
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navegacao;
