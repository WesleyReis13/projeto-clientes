export function validarEmailCompleto(email) {
  const usuario = email.substring(0, email.indexOf("@"));
  const dominio = email.substring(email.indexOf("@") + 1, email.length);

  const emailValido =
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    !usuario.includes("@") &&
    !dominio.includes("@") &&
    !usuario.includes(" ") &&
    !dominio.includes(" ") &&
    dominio.includes(".") &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1;

  return emailValido;
}

export function validarCampos(nome, email, cpf, telefone) {
  const cpfNumeros = cpf.replace(/\D/g, '');
  const cpfValido = validarCPF(cpfNumeros);
  const emailValido = validarEmailCompleto(email);
  const telefoneValido = validarTelefone(telefone);

  return (
    nome.trim() !== '' &&
    emailValido &&
    cpfValido &&
    telefoneValido
  );
}

// Validação robusta de CPF (com dígitos verificadores)
function validarCPF(strCPF) {
  if (strCPF.length !== 11 || /^(\d)\1{10}$/.test(strCPF)) return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(strCPF.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(strCPF.substring(10, 11))) return false;

  return true;
}

function validarTelefone(telefone) {
  const somenteNumeros = telefone.replace(/\D/g, '');
  return somenteNumeros.length >= 10 && somenteNumeros.length <= 11;
}
