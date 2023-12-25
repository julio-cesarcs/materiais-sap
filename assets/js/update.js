function updateTable(material) {

    let i = 0
    while (material) {
        const rows = document.querySelector('.rows');
        const row = document.createElement('tr');

        if (i % 2 !== 0) {
            row.className = 'odd-row';
        }

        const tdCodigo = document.createElement('td');
        const tdNome = document.createElement('td');
        const tdDescricao = document.createElement('td');
        const tdObservacao = document.createElement('td');
        const tdImagem = document.createElement('td');

        const imagem = document.createElement('img')
        imagem.src = material[i].imagem;
        imagem.onclick = enlargedImage

        tdCodigo.innerText = material[i].codigo;

        if (material[i].src != undefined) {
            const tdSystem = document.createElement('a')
            tdSystem.href = material[i].src
            tdSystem.innerHTML = material[i].nome
            tdSystem.target = '_blank'
            tdNome.appendChild(tdSystem);
        } else {
            tdNome.innerText = material[i].nome;
        }
    
        tdDescricao.innerText = material[i].descricao;
        tdObservacao.innerText = material[i].observacao;
        tdImagem.appendChild(imagem);

        row.appendChild(tdCodigo);
        row.appendChild(tdNome);
        row.appendChild(tdDescricao);
        row.appendChild(tdObservacao);
        row.appendChild(tdImagem);

        rows.appendChild(row);
        i++
    }
}
