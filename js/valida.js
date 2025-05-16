export function validarCampos(nome, email, cpf, telefone) {
  const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;

  // Remove tudo que não for número do CPF
  const cpfNumeros = cpf.replace(/\D/g, '');

  return (
    nome !== '' &&
    emailRegex.test(email) &&
    cpfNumeros.length === 11 &&
    telefone !== ''
  );
}
