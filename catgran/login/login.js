const campoUsuario = document.getElementById("usuario");
const campoSenha = document.getElementById("senha");
const botao = document.getElementById("entrar");

botao.addEventListener("click", () => {
    const usuario = campoUsuario.value.trim();
    const senha = campoSenha.value;

    if (usuario === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const novoUsuario = { nome: usuario, senha: senha };
    localStorage.setItem("usuarioCadastrado", JSON.stringify(novoUsuario));

    window.location.href = "login2.html";
});