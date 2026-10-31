const salvo = JSON.parse(localStorage.getItem("usuarioCadastrado"));

const foto = document.getElementById("foto");
const botaoEscolher = document.getElementById("escolher");
const inputArquivo = document.getElementById("arquivo");
const campoNome = document.getElementById("nomePerfil");
const campoBio = document.getElementById("bio");
const botaoSalvar = document.getElementById("salvarPerfil");

let fotoBase64 = ""; 


if (!salvo) {
   window.location.href = "login.html"; 
} else {
    document.getElementById("nomeUsuario").textContent = salvo.nome;

    
   campoNome.value = salvo.nomePerfil || "";
    campoBio.value = salvo.bio || "";
    if (salvo.foto) {
        foto.src = salvo.foto;
        fotoBase64 = salvo.foto;
    }
}


botaoEscolher.addEventListener("click", () => {
    inputArquivo.click();
});


inputArquivo.addEventListener("change", () => {
    const arquivo = inputArquivo.files[0];
    if (!arquivo) return;

    if (arquivo.size > 1024 * 1024) {
        alert("Escolha uma imagem de até 1 MB.");
        return;
    }

    const leitor = new FileReader();
    leitor.onload = () => {
        fotoBase64 = leitor.result;  
        foto.src = fotoBase64;        
    };
    leitor.readAsDataURL(arquivo);
});


botaoSalvar.addEventListener("click", () => {
    const nomePerfil = campoNome.value.trim();
    const bio = campoBio.value.trim();

    if (nomePerfil === "") {
        alert("Digite o seu nome!");
        return;
    }

    salvo.nomePerfil = nomePerfil;
    salvo.bio = bio;
    salvo.foto = fotoBase64;

    localStorage.setItem("usuarioCadastrado", JSON.stringify(salvo));

    window.location.href = "catgrann/perfil/seu_perfil.html";
    
});