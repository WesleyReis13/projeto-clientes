export function getClientes() {
    return JSON.parse(localStorage.getItem('clientes')) || [];
  }
  
  export function salvarClientes(clientes) {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }
  