export function renderizarTabela(clientes, tabela, totalClientes) {
    tabela.innerHTML = '';
    clientes.forEach(cliente => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.cpf}</td>
        <td>${cliente.telefone}</td>
      `;
      tabela.appendChild(tr);
    });
    totalClientes.textContent = clientes.length;
  }
  