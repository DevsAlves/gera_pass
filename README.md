# 🔐 Cadastro com Gerador de Senha

Formulário de criação de conta (nome, e-mail e senha) com um **gerador de senha integrado**, que ajuda o usuário a criar senhas fortes sem sair da tela de cadastro. Construído com **HTML, CSS e JavaScript puro** (vanilla JS), sem frameworks ou dependências externas.

## ✨ Funcionalidades

- 📝 Formulário de cadastro com nome, e-mail, senha e confirmação de senha
- 🔑 Painel de geração de senha que abre/fecha ao clicar em "Clique aqui" (toggle)
- 🎛️ Personalização da senha gerada:
  - Letras (minúsculas e maiúsculas)
  - Números
  - Símbolos (`(){}[]=<>/,.!@#$%^&*`)
  - Quantidade de caracteres configurável (até 30)
- 📋 Botão de copiar a senha gerada, com feedback visual temporário ("Senha copiada")
- 🎨 Layout com banner lateral e imagem de fundo

## 🛠️ Tecnologias

- HTML5
- CSS3 (Flexbox, gradientes, Google Fonts — Montserrat)
- JavaScript (Vanilla JS)

## 📁 Estrutura do projeto

```
.
├── index.html      # Formulário de cadastro + painel do gerador de senha
├── style.css       # Estilização (layout, banner, cores)
├── script.js       # Lógica de geração e cópia da senha
└── images/
    └── bg-form.jpg # Imagem de fundo do banner lateral
```

## 🚀 Como rodar localmente

Não há build nem dependências — basta abrir o arquivo no navegador:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Abra o index.html no navegador
```

Ou, se preferir usar um servidor local (evita bloqueios de `clipboard` em alguns navegadores):

```bash
npx serve .
```

> ⚠️ Lembre-se de colocar uma imagem em `images/bg-form.jpg`, usada como fundo do banner.

## 🧠 Como funciona (resumo técnico)

- O link **"Clique aqui"** alterna a classe `.hide` no painel `#generate-options`, exibindo as opções de geração de senha.
- Cada tipo de caractere tem uma função geradora própria (`getLetterLowerCase`, `getLetterUpperCase`, `getNumber`, `getSymbol`), retornando **um caractere aleatório** por chamada.
- Ao clicar em **"Criar senha"**, `generatePassword` monta um array `generators` com as funções correspondentes às opções marcadas (letras, números, símbolos) e sorteia repetidamente uma delas até atingir o tamanho definido em `#length`.
- A senha gerada é exibida em `#generated-password` (que fica oculto por padrão via CSS) — mas **não é inserida automaticamente no campo `#password`** do formulário; o usuário precisa copiá-la manualmente.
- O botão **"Copiar"** usa `navigator.clipboard.writeText()` para copiar a senha, com mensagem de confirmação temporária.

## 📄 Licença

Setup inicial feito por Matheus Battisti
