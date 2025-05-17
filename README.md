
# 📋 Sistema de Cadastro de Clientes

Este projeto é uma aplicação web simples que permite cadastrar, listar e filtrar clientes utilizando **HTML**, **CSS com Bootstrap**, e **JavaScript modularizado**. Os dados são salvos no **LocalStorage**, portanto não é necessário backend.

## 🚀 Funcionalidades

- Cadastro de clientes com validações robustas:
  - **Nome**: Deve conter pelo menos nome e sobrenome (mínimo 2 palavras, apenas letras).
  - **E-mail**: Deve ser um e-mail válido com domínio, como `exemplo@dominio.com`.
  - **CPF**: Deve conter exatamente 11 dígitos e ser um CPF válido (com verificação dos dígitos verificadores).
  - **Telefone**: Deve conter pelo menos 10 dígitos numéricos.

- Listagem de clientes em uma tabela.
- Filtro por nome (campo de busca).
- Contador de total de clientes cadastrados.
- Interface responsiva com **Bootstrap 5**.
- Organização do JavaScript em módulos:
  - `main.js`
  - `storage.js`
  - `valida.js`
  - `ui.js`

---

## ⚠️ ATENÇÃO: Use o Live Server

> **✅ É altamente recomendado rodar o projeto com uma extensão como o _Live Server_ no VS Code ou outro servidor local.**
> 
> **❌ Abrir o arquivo HTML diretamente pelo navegador (file://) pode causar falhas na importação dos módulos JavaScript (`type="module"`).**

### Como usar o Live Server no VS Code:

1. Instale a extensão **Live Server** (Ritwick Dey).
2. Clique com o botão direito no `index.html` e escolha **"Open with Live Server"**.
3. O navegador abrirá automaticamente com o projeto funcionando corretamente.

---

## 🛠️ Como rodar o projeto localmente

1. Clone este repositório:

```bash
git clone https://github.com/WesleyReis13/projeto-clientes
```

2. Abra a pasta no seu editor de código.

3. Execute com o **Live Server** (veja instrução acima).

---

## 🧾 Como cadastrar um cliente corretamente

1. **Preencha todos os campos obrigatórios:**

   - **Nome:** mínimo 2 palavras, apenas letras.
   - **E-mail:** formato válido, como `nome@dominio.com`.
   - **CPF:** apenas números, com 11 dígitos válidos.
   - **Telefone:** apenas números, com no mínimo 10 dígitos.

2. Clique em **"Cadastrar"**.
3. O cliente será adicionado à tabela e salvo no LocalStorage.
4. Use o campo de filtro para buscar clientes pelo nome.
5. O contador de clientes será atualizado automaticamente.

---

## 📁 Estrutura de Arquivos

```
/
├── index.html
├── js/
│   ├── main.js
│   ├── storage.js
│   ├── valida.js
│   └── ui.js
└── README.md
```

---

## ✅ Boas práticas aplicadas

- Separação de responsabilidades com JS modular.
- Validações robustas.
- Layout com Bootstrap.
- Código limpo e comentado.

---

Feito com 💻 e dedicação.
