# 📄 Gerador de Fichas Técnicas com IA
Uma aplicação web inteligente que utiliza a API do Google Gemini para criar fichas técnicas profissionais a partir de um simples comando de texto. Desenvolvido com React, focado em uma experiência de usuário limpa, intuitiva e funcional.

<br>

## 💻 Tecnologias Utilizadas
<div style="display: inline_block">
<img align="center" alt="Vini-Js" src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black">
<img align="center" alt="Vini-Js" src="https://img.shields.io/badge/Google%20Gemini-8E75B2.svg?style=for-the-badge&logo=Google-Gemini&logoColor=white">
<img align="center" alt="Vini-Js" src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black">
<img align="center" alt="Vini-Js" src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white">
<img align="center" alt="Vini-Js" src="https://img.shields.io/badge/CSS-663399.svg?style=for-the-badge&logo=CSS&logoColor=white">
</div>

<br>
<br>

## ✨ Funcionalidades
<br>
🤖 Geração com Inteligência Artificial: Crie o rascunho de uma ficha técnica completa a partir de um simples prompt de texto (ex: "hambúrguer de costela").

✏️ Edição Completa: Todos os campos gerados pela IA são 100% editáveis.

📋 Lista de Ingredientes Dinâmica: Adicione, remova e edite ingredientes e suas quantidades com facilidade.

📄 Exportação para PDF: Gere um PDF profissional com texto selecionável, formatado para uma folha A4 e com um rodapé personalizado.

💾 Armazenamento Local: Salve múltiplas fichas técnicas no seu navegador para consulta e edição futura.

🎨 Tema Dark & Light: Alterne entre os modos claro e escuro para melhor conforto visual.

📱 Design Responsivo: A interface se adapta perfeitamente a desktops, tablets e celulares.

🔑 Segurança: A chave de API é gerenciada de forma segura através de variáveis de ambiente, nunca sendo exposta no código-fonte.


<br>

## 🔧 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação no seu ambiente de desenvolvimento:


### 1. Clone o Repositório

`git clone https://github.com/viniciusl17/gerador-fichas-tecnicas.git`


### 2. Navegue até a Pasta do Projeto

`cd nome-do-seu-repositorio`


### 3. Instale as Dependências

`npm install`



### 4. Configure sua Chave de API

```
Crie um arquivo chamado .env.local na raiz do projeto. 

Dentro dele, adicione sua chave da API do Google Gemini, como no exemplo abaixo:

REACT_APP_GEMINI_API_KEY=SUA_CHAVE_DE_API_SECRETA_AQUI
```

### 5. Rode a Aplicação

`npm start`

`A aplicação estará disponível em http://localhost:3000.`
