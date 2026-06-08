Markdown
# 🦷 Sorriso Perfeito - Consultório Odontológico

Um site moderno, elegante e totalmente responsivo desenvolvido para um consultório dentário. O projeto conta com seções dinâmicas, transições visuais suaves, alternância de tema (Dark Mode) e integração direta de agendamento com o WhatsApp.

---

## 🚀 Funcionalidades

* **Design Totalmente Responsivo:** Layout adaptado perfeitamente para Computadores, Tablets e Smartphones usando Flexbox.
* **Menu de Navegação Inteligente:** Rolagem suave até as seções através de IDs nas tags (`Home`, `Nossos Serviços`, `Quem Somos` e `Contato`).
* **Integração com WhatsApp:** Botões de ação rápida e formulário de contato que estruturam as mensagens do paciente e abrem diretamente o chat do WhatsApp.
* **Modo Claro/Escuro (Dark Mode):** Alternador de tema interativo com persistência de dados no navegador (`Local Storage`).
* **Efeitos Visuais Suaves:** Animações sutis e transições de cor/elevação (`hover` e `transform`) ao interagir com botões e cards.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído do zero utilizando as seguintes tecnologias e ferramentas:

* **HTML5:** Estruturação semântica e organizada de todas as seções do site (Cabeçalho, Banner, Serviços, Quem Somos, Depoimentos, Formulário e Rodapé).
* **CSS3 (Flexbox & Media Queries):** Utilizado para criar um layout fluido e moderno. Responsável pelas animações sutis (`transition`, `transform`), gerenciamento de profundidade (`box-shadow`), e adaptação perfeita para computadores, tablets e smartphones.
* **JavaScript (ES6):** Responsável pela lógica de interatividade do site:
  * Manipulação do DOM para ativar/desativar o Modo Escuro.
  * Captura de dados do formulário e conversão em texto codificado para envio direto para a API do WhatsApp.
* **Google Fonts:** Integração da fonte **Roboto** para garantir uma tipografia limpa, profissional e legível em qualquer dispositivo.

---

## 🎨 Paleta de Cores e Tipografia

O projeto utiliza uma identidade visual clean voltada para a área da saúde:
* **Verde Suave (`#90BE6D`):** Usado para destaques, links e botões principais (transmite bem-estar e saúde).
* **Cinza Claro (`#F3F4F6`):** Usado como plano de fundo principal e blocos secundários (traz leveza ao layout).
* **Tipografia:** Fonte **Roboto** (com variações de peso de 300 a 900) para máxima elegância.

---

## 📂 Estrutura de Pastas

```text
aulaweb/
│
├── index.html          # Estrutura principal do site
│
├── script/
│   └── script.js       # Comportamentos, Dark Mode e envio do WhatsApp
│
├── style/
│   └── style.css       # Estilização geral, Flexbox e Responsividade
│
└── assets/
    └── img/            # Imagens dos serviços, resultados e profissionais

👤 Autor
Desenvolvido por Laysla como parte do projeto prático de desenvolvimento web.







