import { getClientes, salvarClientes } from './storage.js';
import { validarCampos } from './valida.js';
import { renderizarTabela } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formCliente');
  const tabela = document.getElementById('tabelaClientes');
  const filtro = document.getElementById('filtro');
  const totalClientes = document.getElementById('totalClientes');

  renderizarTabela(getClientes(), tabela, totalClientes);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (!validarCampos(nome, email, cpf, telefone)) {
      alert('Preencha todos os campos corretamente.');
      return;
    }

    const clientes = getClientes();
    clientes.push({ nome, email, cpf, telefone });
    salvarClientes(clientes);
    renderizarTabela(clientes, tabela, totalClientes);
    form.reset();
  });

  filtro.addEventListener('input', () => {
    const texto = filtro.value.toLowerCase();
    const clientes = getClientes();
    const filtrados = clientes.filter(c =>
      c.nome.toLowerCase().includes(texto)
    );
    renderizarTabela(filtrados, tabela, totalClientes);
  });
});
