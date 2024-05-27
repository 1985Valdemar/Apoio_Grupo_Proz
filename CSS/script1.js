// Seleciona os campos de entrada de e-mail, rótulos e elementos de ajuda
let usernameInput = document.getElementById("email");
let usernameLabel = document.querySelector('label[for="email"]');
let usernameHelp = document.getElementById("username-helper");

// Função para mostrar ou esconder a mensagem "Campo obrigatório"
function toggleRequiredMessage(inputElement, helperElement) {
    inputElement.addEventListener("focus", function() {
        helperElement.textContent = "Campo obrigatório";
        helperElement.classList.add("required-popup");
    });

    inputElement.addEventListener("blur", function() {
        if (inputElement.value === "") {
            helperElement.textContent = "Campo obrigatório";
            helperElement.classList.add("required-popup");
            estilizarInputIncorreto(inputElement, helperElement);
        } else {
            helperElement.textContent = "";
            helperElement.classList.remove("required-popup");
            estilizarInputCorreto(inputElement, helperElement);
        }
    });
}

// Função para adicionar popup de campo obrigatório em qualquer campo de entrada
function addRequiredPopup(inputId, helperId) {
    let inputElement = document.getElementById(inputId);
    let helperElement = document.getElementById(helperId);

    toggleRequiredMessage(inputElement, helperElement);
}

//Adiciona o comportamento de popup para diversos campos de entrada
// addRequiredPopup("email", "email-helper");
// addRequiredPopup("senha", "senha-helper");
// addRequiredPopup("email-cadastro", "email-cadastro-helper");
// addRequiredPopup("nome", "nome-helper");
// addRequiredPopup("senha-cadastro", "senha-cadastro-helper");

// Função para alternar popup de campo obrigatório
function togglePopup(input, label) {
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    });

    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    });
}

// Função para estilizar input correto
function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

// Função para estilizar input incorreto
function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}
//--------------------Função para validar valor do input-----------------------------
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

//---------------------------------- Validação do campo de nome-----------------------------------------------------------
let usernameInput1 = document.querySelector("#nome");
let usernameLabel1 = document.querySelector('label[for="nome"]');
let usernameHelper1 = document.getElementById("nome-helper");

validarValor(usernameInput1, usernameHelper1)

// usernameInput1.addEventListener("change", (e) => {
//     let valor = e.target.value;

//     if (valor.length < 3) {
//         usernameHelper1.innerText = "Seu nome precisa ter 3 ou mais caracteres";
//         estilizarInputIncorreto(usernameInput1, usernameHelper1);
//         inputCorretos.username = false;
//     } else {
//         estilizarInputCorreto(usernameInput1, usernameHelper1);
//         inputCorretos.username = true;
//     }
// });

// Validação do campo de e-mail do cadastro
let emailInput = document.getElementById("email-cadastro");
let emailLabel = document.querySelector('label[for="email-cadastro"]');
let emailHelper = document.getElementById("email-cadastro-helper");

togglePopup(emailInput, emailLabel);

emailInput.addEventListener("change", (e) => {
    let valor = e.target.value;

    if (valor.includes("@") && valor.includes(".com")) {
        estilizarInputCorreto(emailInput, emailHelper);
        inputCorretos.emailcadastro = true;
    } else {
        emailHelper.innerText = "Precisa inserir um email válido";
        estilizarInputIncorreto(emailInput, emailHelper);
        inputCorretos.emailcadastro = false;
    }
});

// Validação do campo de senha do cadastro
let senhaInput = document.getElementById("senha-cadastro");
let senhaLabel = document.querySelector('label[for="senha-cadastro"]');
let senhaHelper = document.getElementById("senha-cadastro-helper");

togglePopup(senhaInput, senhaLabel);

senhaInput.addEventListener("blur", (e) => {
    let valor = e.target.value;

    if (valor == "") {
        senhaHelper.innerText = "Insira uma senha";
        estilizarInputIncorreto(senhaInput, senhaHelper);
        inputCorretos.senhacadastro = false;
    } else {
        estilizarInputCorreto(senhaInput, senhaHelper);
        inputCorretos.senhacadastro = true;
    }
});

// Validação do campo de e-mail do login
let emailInput1 = document.getElementById("email");
let emailLabel1 = document.querySelector('label[for="email"]');
let emailHelper1 = document.getElementById("email-helper");

togglePopup(emailInput1, emailLabel1);

emailInput1.addEventListener("change", (e) => {
    let valor = e.target.value;

    if (valor.includes("@") && valor.includes(".com")) {
        estilizarInputCorreto(emailInput1, emailHelper1);
        inputCorretos.email = true;
    } else {
        emailHelper1.innerText = "Precisa inserir um email válido";
        estilizarInputIncorreto(emailInput1, emailHelper1);
        inputCorretos.email = false;
    }
});

// Validação do campo de senha do login
let senhaInput1 = document.getElementById("password");
let senhaLabel1 = document.querySelector('label[for="password"]');
let senhaHelper1 = document.getElementById("senha-helper");

togglePopup(senhaInput1, senhaLabel1);

senhaInput1.addEventListener("blur", (e) => {
    let valor = e.target.value;

    if (valor == "") {
        senhaHelper1.innerText = "Insira uma senha";
        estilizarInputIncorreto(senhaInput1, senhaHelper1);
        inputCorretos.senha = false;
    } else {
        estilizarInputCorreto(senhaInput1, senhaHelper1);
        inputCorretos.senha = true;
    }
});

// Habilita o envio do formulário se todos os campos estiverem corretos
const btnSubmit = document.querySelector("button[type=submit]");
let inputCorretos = {
    username: false,
    email: false,
    emailcadastro: false,
    senhacadastro: false,
    senha: false
};

btnSubmit.addEventListener("click", (e) => {
    if (
        !inputCorretos.username ||
        !inputCorretos.email ||
        !inputCorretos.emailcadastro ||
        !inputCorretos.senhacadastro ||
        !inputCorretos.senha 

    ) {
         e.preventDefault();
        alert("Preencha todos os campos");
    } else {
        alert("Formulário Enviado");
    }
});
