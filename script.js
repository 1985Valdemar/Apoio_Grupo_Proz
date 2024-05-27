// Selecionar o campo de entrada de e-mail
let usernameInput = document.getElementById("email");
// Selecionar o rótulo do campo de e-mail
let usernameLabel = document.querySelector('label[for="email"]');
// Selecionar o elemento de ajuda do usuário
let usernameHelp = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório quando o campo de e-mail receber foco
usernameInput.addEventListener("focus", function() {
    usernameHelp.textContent = "Campo obrigatório";
    usernameHelp.classList.add("required-popup");
});

// Ocultar popup de campo obrigatório quando o campo de e-mail perder foco
usernameInput.addEventListener("blur", function() {
    usernameHelp.textContent = "";
    usernameHelp.classList.remove("required-popup");
});


function addRequiredPopup(inputId, helperId) {
    // Seleciona o elemento de entrada (input) pelo ID
    let inputElement = document.getElementById(inputId);
    // Seleciona o elemento de ajuda (helper) pelo ID
    let helperElement = document.getElementById(helperId);

    // Adiciona um ouvinte de evento para o foco no campo de entrada
    inputElement.addEventListener("focus", function() {
        // Quando o campo de entrada recebe foco, mostra a mensagem de ajuda
        helperElement.textContent = "Campo obrigatório";
        helperElement.classList.add("required-popup");
    });

    // Adiciona um ouvinte de evento para quando o campo de entrada perde o foco
    inputElement.addEventListener("blur", function() {
        // Quando o campo de entrada perde o foco, esconde a mensagem de ajuda
        helperElement.textContent = "";
        helperElement.classList.remove("required-popup");
    });
}

// Adiciona o comportamento de popup ao campo de e-mail do login
addRequiredPopup("email", "email-helper");
// Adiciona o comportamento de popup ao campo de senha do login
addRequiredPopup("senha", "senha-helper");
// Adiciona o comportamento de popup ao campo de e-mail do cadastro
addRequiredPopup("email-cadastro", "email-cadastro-helper");
// Adiciona o comportamento de popup ao campo de nome do cadastro
addRequiredPopup("nome", "nome-helper");
// Adiciona o comportamento de popup ao campo de senha do cadastro
addRequiredPopup("senha-cadastro", "senha-cadastro-helper");

// ---------- VERIFICAÇÕES -------------- //
// ********** DEVE VERIFICAR E AVIZAR USUARIO *********** //
// ---------- FUNÇÕES GERAIS -------------- //



function togglePopup(input, label, input1, label1) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
      label.classList.add("required-popup");
    });

    // Mostrar popup de campo obrigatório
    input1.addEventListener("focus", () => {
      label1.classList.remove("required-popup");
    });
  
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
      label.classList.remove("required-popup");
    });

     // Ocultar popup de campo obrigatório
    input1.addEventListener("blur", () => {
      label1.classList.remove("required-popup");
    });
  }
  
function estilizarInputCorreto(input, helper, input1, helper1) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
    helper1.classList.remove("visible");
    input1.classList.remove("error");
    input1.classList.add("correct");
  }
  
function estilizarInputIncorreto(input, helper, input1, helper1) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
    helper1.classList.add("visible");
    input1.classList.add("error");
    input1.classList.remove("correct");
  }
  

  // ---------- VALIDAÇÃO USERNAME ---------- //
  let usernameInput1 = document.getElementById("nome");
  let usernameLabel1 = document.querySelector('label[for="name"]');
  let usernameHelper1 = document.getElementById("nome-helper");
  
  togglePopup(usernameInput1, usernameLabel1)
  
  // Validar valor do input
  usernameInput1.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.length < 3){
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      usernameHelper1.innerText = "Seu username precisa ter 3 ou mais caracteres";
      estilizarInputIncorreto(usernameInput1, usernameHelper1)
      inputCorretos.username = false
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(usernameInput1, usernameHelper1);
      inputCorretos.username = true
    }
  })

  // ---------- VALIDAÇÃO EMAIL CADASTRO ---------- //
  let emailInput = document.getElementById("email-cadastro");
  let emailLabel = document.querySelector('label[for="email-cadastro"]');
  let emailHelper = document.getElementById("email-cadastro-helper");
  
  togglePopup(emailInput, emailLabel)
  
  // Validar valor do input
  emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.includes("@") && valor.includes(".com")){
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(emailInput, emailHelper);
      inputCorretos.emailcadastro = true
    } else {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      emailHelper.innerText = "Precisa inserir um email válido";
      estilizarInputIncorreto(emailInput, emailHelper);
      inputCorretos.emailcadastro = false
    }
  })
  
  // Pratica
  // ---------- VALIDAÇÃO Senha ---------- //
  let senhaInput = document.getElementById("senha-cadastro");
  let senhaLabel = document.querySelector('label[for="senha-cadastro"]');
  let senhaHelper = document.getElementById("senha-cadastro-helper");
  
  togglePopup(senhaInput, senhaLabel)
  
  senhaInput.addEventListener("blur", (e)=>{
    let valor = e.target.value
  
    if(valor == ""){
      senhaHelper.innerText = "Insira Uma Senha"
      estilizarInputCorreto(senhaInput, senhaHelper)
      inputCorretos.senhacadastro = false
    } else{
      estilizarInputCorreto(senhaInput, senhaHelper)
      inputCorretos.senhacadastro = true
    }
  
  })

  
  // ---------- VALIDAÇÃO LOGIN ---------- //
  // ********** EMAIL ******************** //
  let emailInput1 = document.getElementById("email");
  let emailLabel1 = document.querySelector('label[for="email"]');
  let emailHelper1 = document.getElementById("email-helper");
  
  togglePopup(emailInput1, emailLabel1)
  
  // Validar valor do input
  emailInput1.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.includes("@") && valor.includes(".com")){
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(emailInput1, emailHelper1);
      inputCorretos.email = true
    } else {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      emailHelper1.innerText = "Precisa inserir um email válido";
      estilizarInputIncorreto(emailInput1, emailHelper1);
      inputCorretos.email = false
    }
  })
  
   // ---------- VALIDAÇÃO LOGIN ---------- //
  // *********** VALIDAÇÃO Senha ********* //
  let senhaInput1 = document.getElementById("password");
  let senhaLabel1 = document.querySelector('label[for="senha"]');
  let senhaHelper1 = document.getElementById("senha-helper");
  
  togglePopup(senhaInput1, senhaLabel1)
  
  senhaInput1.addEventListener("blur", (e)=>{
    let valor = e.target.value
  
    if(valor == ""){
      senhaHelper1.innerText = "Insira Uma Senha"
      estilizarInputCorreto(senhaInput1, senhaHelper1)
      inputCorretos.senha = false
    } else{
      estilizarInputCorreto(senhaInput1, senhaHelper1)
      inputCorretos.senha = true
    }
  
  })
  

  
  // ************* Habilitar o envio do formulario **************
  const btnSumit = document.querySelector("button[type=submit]")
  let inputCorretos = {
    username: false,
    email: false,
    emailcadastro: false,
    senhacadastro: false,
    senha: false
  }
  
  //const nomeErrado = !inputCorretos.username
  //const emailErrado = !inputCorretos.email
  //const senhaErrada = !inputCorretos.senha
  //const confirmaSenhaErrada = !inputCorretos.confirmaSenha
  
  
  btnSumit.addEventListener("click", (e)=>{
  
    if(
      !inputCorretos.username ||
      !inputCorretos.email ||
      !inputCorretos.emailcadastro ||
      !inputCorretos.senhacadastro ||
      !inputCorretos.senha 
     //nomeErrado || emailErrado || senhaErrada || confirmaSenhaErrada
    ){
      e.preventDefault()
      alert("Preencha todos os campos")
    }else{
      alert("Formulário Enviado")
  
    }
  })
