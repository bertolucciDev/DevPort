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
