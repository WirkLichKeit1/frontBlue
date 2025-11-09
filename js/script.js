async function carregarUsuarios() {
    const url = "https://blue-z0xh.onrender.com/users";

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        const tabela = document.getElementById("usuariosTable");
        const corpoTabela = document.getElementById("usuariosBody");
        const loading = document.getElementById("loading");

        dados.forEach(usuario => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.telefone}</td>
            `;
            corpoTabela.appendChild(linha);
        });

        loading.style.display = "none";
        tabela.style.display = "table";

    } catch (error) {
        console.error("Erro ao carregar API:", error);
        document.getElementById("loading").innerText = "Erro ao carregar dados.";
    }
}

carregarUsuarios();
