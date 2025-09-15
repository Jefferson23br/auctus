# Website Institucional - Auctus Consultoria

![Status](https://img.shields.io/badge/status-em%20andamento-yellow)

Este repositório contém o código-fonte do novo site institucional da Auctus Consultoria. O projeto consiste em uma landing page moderna de página única, desenvolvida para ser a principal porta de entrada digital da empresa, com foco em apresentar seus serviços e atrair novos clientes.

## ✨ Features Principais

- **Design Moderno:** Interface com vídeo de fundo em tela cheia e sobreposição de texto.
- **Animações Dinâmicas:** Efeito de "digitação" para o título e subtítulo, criado com JavaScript puro.
- **Navegação Intuitiva:** Menu lateral retrátil (estilo hambúrguer) para navegação.
- **Layout Responsivo:** O design se adapta perfeitamente a desktops, tablets e smartphones.
- **Conteúdo Dinâmico:** O ano no rodapé é atualizado automaticamente usando PHP, garantindo que a informação de copyright esteja sempre correta.

## 💻 Tecnologias Utilizadas

- **Backend:** **PHP** (utilizado para modularizar o código com `includes` para o cabeçalho e rodapé).
- **Frontend:** **HTML5**, **CSS3** (com Flexbox e Media Queries para responsividade), e **JavaScript** puro (para interatividade do menu e animações).

## 📁 Estrutura de Arquivos

O projeto está organizado da seguinte forma para facilitar a manutenção:
|-- index.php             # Arquivo principal da página
|-- assets/               # Pasta para todos os recursos estáticos
|   |-- css/
|   |   -- style.css     # Folha de estilos principal |   
|-- js/ 
|   |   -- scripts.js    # Lógica de interatividade
|   |-- images/
|   |   -- logo.webp     # Logo da empresa 
|   -- video/
|       -- video.mp4     # Vídeo de fundo 
|-- templates/            # Peças reutilizáveis do layout 
|   |-- header.php        # Cabeçalho e menu 
|    -- footer.php        # Rodapé e scripts
-- README.md             # Este arquivo


## 🚀 Como Rodar o Projeto Localmente

Para executar este projeto no seu computador, você precisará de um ambiente de servidor local que suporte PHP.

**Pré-requisitos:**
- Um servidor local como [XAMPP](https://www.apachefriends.org/pt_br/index.html) instalado.
- Ou, ter o [PHP](https://windows.php.net/download/) instalado em seu sistema.

**Passos:**

1.  Clone ou baixe este repositório para o seu computador.
2.  **Usando XAMPP:**
    - Mova a pasta do projeto para dentro do diretório `htdocs` da sua instalação do XAMPP.
    - Inicie o módulo **Apache** no painel de controle do XAMPP.
    - Acesse `http://localhost/nome-da-pasta-do-projeto` no seu navegador.
3.  **Usando o servidor embutido do PHP:**
    - Abra um terminal na pasta raiz do projeto.
    - Execute o comando: `php -S localhost:8000`
    - Acesse `http://localhost:8000` no seu navegador.

## 📝 Próximos Passos (To-Do)

Como o projeto ainda está em andamento, aqui estão os próximos recursos planejados:

- [ ] Adicionar seção "Sobre Nós".
- [ ] Criar uma seção detalhando os "Serviços" oferecidos.
- [ ] Implementar um formulário de contato funcional na seção "Fale com um Especialista".
- [ ] Otimizar o vídeo e as imagens para um carregamento mais rápido.
- [ ] Substituir os textos provisórios pelo conteúdo final.