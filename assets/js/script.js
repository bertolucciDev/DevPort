document.addEventListener("DOMContentLoaded", function () {
    const projetos = [
        {
            nome: "Projeto 1",
            descricao: "Descrição do projeto 1",
            URL: "https://loja.hostingfox.xyz",
            imagem: [
                "assets/img/projetos/loja-login.png",
                "assets/img/projetos/loja-inicio.png",
            ]
        },
        {
            nome: "Projeto 2",
            descricao: "Descrição do projeto 2",
            URL: "https://exemplo.com.br/projeto2",
            imagem: [
                "assets/img/projetos/loja.png",
                "assets/img/projetos/loja.png",
            ]
        },
        {
            nome: "Projeto 3",
            descricao: "Descrição do projeto 3",
            URL: "https://exemplo.com.br/projeto1",
            imagem: [
                "assets/img/projetos/loja.png",
                "assets/img/projetos/loja.png",
            ]
        }
    ];

    const projetoLista = document.getElementById("projetos-lista");
    projetoLista.innerHTML = "";

    projetos.forEach(projeto => {
        const card = document.createElement("div");
        card.classList.add("col-md-4");

        let carouselItems = projeto.imagem.map((imagem, index) => {
            return `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${imagem}" class="projeto-imagem d-block w-100" alt="${projeto.nome || 'Projeto sem Nome'}">
            </div>
            `;
        }).join("");

        card.innerHTML = `
        <div class="card">
            <!-- Carrossel de Imagens -->
            <div id="carousel${projeto.nome.replace(/\s+/g, '')}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${carouselItems}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${projeto.nome.replace(/\s+/g, '')}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel${projeto.nome.replace(/\s+/g, '')}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Próximo</span>
                </button>
            </div>
            <div class="card-body">
                <h5 class="card-title">${projeto.nome}</h5>
                <p class="card-text">${projeto.descricao}</p>
                <a href="${projeto.URL}" class="btn btn-primary" target="_blank">Ver Projeto</a>
            </div>
        </div>
        `;

        projetoLista.appendChild(card);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("3Xhm3jN93etOVulFv");

    document.getElementById("form-contato").addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;
        const assunto = document.getElementById("assunto").value;
        const dataHora = new Date().toLocaleString();

        emailjs.send("service_py04lif", "template_s4pb9r7", {
            name: nome,
            email: email,
            message: mensagem,
            subject: assunto, 
            time: dataHora
        })
            .then(function (response) {
                const enviar = document.createElement("div");
                enviar.classList.add("text-center", "mt-4");

                enviar.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Mensagem enviada com sucesso!</strong>
                </div>
            `;
                document.getElementById("form-contato").appendChild(enviar);
                document.getElementById("form-contato").reset();

                setTimeout(function () {
                    enviar.remove();
                }, 5000);
            }, function (error) {
                const enviar = document.createElement("div");
                enviar.classList.add("text-center", "mt-4");

                enviar.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Erro ao enviar mensagem: ${error.text}</strong>
                </div>
            `;
                document.getElementById("form-contato").appendChild(enviar);

                setTimeout(function () {
                    enviar.remove();
                }, 5000);
            });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const nomeTexto = document.getElementById('nome-texto');
    const nome = "Luis Otavio Bertolucci Oliveira"
    let index = 0

    function digitarNome() {
        if (index < nome.length) {
            nomeTexto.textContent += nome.charAt(index)
            index++
            setTimeout(digitarNome, 100)
        } else {
            setTimeout(apagarNome, 1000)
        }
    }

    function apagarNome() {
        if (index > 0) {
            nomeTexto.textContent = nomeTexto.textContent.slice(0, -1)
            index--
            setTimeout(apagarNome, 100)
        } else {
            setTimeout(digitarNome, 1000)
        }
    }

    digitarNome();
})
