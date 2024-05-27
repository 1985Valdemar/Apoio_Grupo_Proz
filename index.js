//------------------------FUNÇÃO DE VALIDAÇÃO -------------------//

function validarValor(input, helper) {
    input.addEventListener("change", (e) => {
      let valor = e.target.value;
      // console.log(valor);
      if (valor.length < 3) {
        input.classList.add("error");
        helper.classList.add("visible");
        helper.innerText = "Digite um nome válido maior que 3 caracteres.";
        inputsCorretos.username = false;
      } else {
        input.classList.remove("error");
        helper.classList.remove("visible");
        input.classList.add("correct");
        inputsCorretos.username = true;
      }
    });
  }
  
  function togglePopup(input, label) {
    input.addEventListener("focus", () => {
      label.classList.add("required-popup");
    });
  
    input.addEventListener("blur", () => {
      label.classList.add("required-popup");
    });
  }
  
  function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
  }
  
  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
  }
  
  function validarSenha(input, helper) {
    input.addEventListener("blur", (e) => {
      let valor = e.target.value;
      if (valor === "") {
        helper.innerText = "O campo de senha não pode estar vazio!";
        estilizarInputIncorreto(input, helper);
        inputsCorretos.senha = false;
        inputCorretoLog.senha = false;
      } else {
        estilizarInputCorreto(input, helper);
        inputsCorretos.senha = true;
        inputCorretoLog.senha = true;
      }
    });
  }

  // --------------------------------VALIDAÇÃO USERNAME ------------------------------------- //

let usernameInputCadastro = document.getElementById("nome");
let usernameHelperCadastro = document.getElementById(
  "nome-helper"
);

validarValor(usernameInputCadastro, usernameHelperCadastro);