// Validação de Nome
function validarNome(nome) {
  const nomeLimpo = nome.trim();
  const palavras = nomeLimpo.split(/\s+/);

  if (palavras.length < 2) return false;

  const regexPalavra = /^[A-Za-zÀ-ÿ]{2,}$/;
  return palavras.every(palavra => regexPalavra.test(palavra));
}

// Validação de E-mail
function validarEmailCompleto(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email.trim());
}

// Validação de CPF com cálculo dos dígitos verificadores
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');

  if (!cpf || cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0, resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  return resto === parseInt(cpf.charAt(10));
}

// Validação de Telefone (mínimo 10 dígitos, só números)
function validarTelefone(telefone) {
  const telefoneNumeros = telefone.replace(/\D/g, '');
  return telefoneNumeros.length >= 10 && telefoneNumeros.length <= 11;
}

// Validação geral
export function validarCampos(nome, email, cpf, telefone) {
  return (
    validarNome(nome) &&
    validarEmailCompleto(email) &&
    validarCPF(cpf) &&
    validarTelefone(telefone)
  );
}
