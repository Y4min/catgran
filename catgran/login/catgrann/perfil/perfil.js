let usuario = null;
let fotoPostBase64 = "";

/* ---------- Perfil ---------- */
function carregarPerfil() {
    const dadosSalvos = localStorage.getItem("usuarioCadastrado");

    if (!dadosSalvos) {
        window.location.href = "../../login.html";
        return;
    }

    try {
        usuario = JSON.parse(dadosSalvos);
    } catch (erro) {
        localStorage.removeItem("usuarioCadastrado");
        window.location.href = "../../login.html";
        return;
    }

    if (!usuario.nomePerfil) {
        window.location.href = "../../login2.html";
        return;
    }

    document.getElementById("nome1").textContent = usuario.nome;
    document.getElementById("nomeCompleto").textContent = usuario.nomePerfil;
    document.getElementById("biogafia").textContent = usuario.bio || "";

    if (usuario.foto) {
        document.getElementById("fotoPerfil").src = usuario.foto;
    }

    document.getElementById("qtdSeguidores").textContent = usuario.seguidores ?? 0;
    document.getElementById("qtdSeguindo").textContent = usuario.seguindo ?? 0;

    document.title = `${usuario.nomePerfil} (@${usuario.nome}) • Catgran`;

    renderizarPosts();
}

function salvarUsuario() {
    try {
        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));
        return true;
    } catch (erro) {
        return false;
    }
}

/* ---------- Grade de posts ---------- */
function renderizarPosts() {
    const grade = document.getElementById("grade");
    const lista = usuario.postsLista || [];

    grade.innerHTML = "";

    lista.forEach((post) => {
        const img = document.createElement("img");
        img.src = post.imagem;
        img.alt = "Post de gato";
        grade.appendChild(img);
    });

    document.getElementById("qtdPosts").textContent = lista.length;

    // Sem posts: botão grande. Com posts: só o "+" no canto.
    const temPosts = lista.length > 0;
    document.getElementById("btnPostar").hidden = temPosts;
    document.getElementById("btnMais").hidden = !temPosts;
}

/* ---------- Reduz a imagem para caber no localStorage ---------- */
function comprimirImagem(arquivo, tamanhoMax = 800) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();

        leitor.onerror = reject;
        leitor.onload = () => {
            const img = new Image();
            img.onerror = reject;
            img.onload = () => {
                const escala = Math.min(1, tamanhoMax / Math.max(img.width, img.height));
                const canvas = document.createElement("canvas");
                canvas.width = img.width * escala;
                canvas.height = img.height * escala;
                canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", 0.8));
            };
            img.src = leitor.result;
        };

        leitor.readAsDataURL(arquivo);
    });
}

/* ---------- Janela de novo post ---------- */
const modal = document.getElementById("modalPost");
const preview = document.getElementById("previewPost");
const inputArquivoPost = document.getElementById("arquivoPost");
const botaoPublicar = document.getElementById("publicarPost");

function abrirModal() {
    fotoPostBase64 = "";
    inputArquivoPost.value = "";
    preview.hidden = true;
    botaoPublicar.disabled = true;
    modal.showModal();
}

document.getElementById("btnPostar").addEventListener("click", abrirModal);
document.getElementById("btnMais").addEventListener("click", abrirModal);

document.getElementById("cancelarPost").addEventListener("click", () => {
    modal.close();
});

document.getElementById("escolherPost").addEventListener("click", () => {
    inputArquivoPost.click();
});

inputArquivoPost.addEventListener("change", async () => {
    const arquivo = inputArquivoPost.files[0];
    if (!arquivo) return;

    try {
        fotoPostBase64 = await comprimirImagem(arquivo);
        preview.src = fotoPostBase64;
        preview.hidden = false;
        botaoPublicar.disabled = false;
    } catch (erro) {
        alert("Não consegui ler essa imagem. Tente outra.");
    }
});

botaoPublicar.addEventListener("click", () => {
    if (!fotoPostBase64) return;

    usuario.postsLista = usuario.postsLista || [];
    usuario.postsLista.unshift({
        imagem: fotoPostBase64,
        data: Date.now()
    });

    if (!salvarUsuario()) {
        usuario.postsLista.shift();
        alert("Sem espaço para salvar. Use uma imagem menor.");
        return;
    }

    renderizarPosts();
    modal.close();
});

/* ---------- Sair ---------- */
document.getElementById("btnSair").addEventListener("click", () => {
    localStorage.removeItem("usuarioCadastrado");
    window.location.href = "../../login.html";
});

carregarPerfil();