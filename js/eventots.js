
document.addEventListener('DOMContentLoaded', function () {


  const nome = document.querySelector("#nome");
  const sexo = document.querySelector("#sexo");
  const cpf = document.querySelector("#cpf");
  const dtNascimento = document.querySelector("#dtNascimento");
  const email = document.querySelector("#email");
  const telefone = document.querySelector("#telefone");

  const btn__cadastrar = document.querySelector("#cadastrar");

  btn__cadastrar.onclick = function () {
    console.log('Nome: ', nome.value);
    console.log("Sexo: ", sexo.value);
    console.log("Cpf: ", cpf.value);
    console.log("Data Nascimento: ", dtNascimento.value);
    console.log("Email: ", email.value);
    console.log("Telefone: ", telefone.value);
  };




});