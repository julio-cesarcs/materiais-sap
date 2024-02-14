function updateTable(material) {

    let i = 0
    while (material) {
        const rows = document.querySelector('.rows');
        const row = document.createElement('tr');

        if (i % 2 !== 0) {
            row.className = 'odd-row';
        }

        const tdCodigo = document.createElement('td');
        tdCodigo.style.width='200px'
        const tdNome = document.createElement('td');
        tdNome.classList = document = 'column-name'
        const tdDescricao = document.createElement('td');
        tdDescricao.classList = 'column-hide column-description'
        const tdObservacao = document.createElement('td');
        tdObservacao.classList = 'column-hide column-observation'
        const tdImagem = document.createElement('td');
        tdImagem.classList = 'column-image'

        const imagem = document.createElement('img');
        imagem.src = `./assets/img/${material[i].codigo}.png`;
        imagem.onerror = function() {
            imagem.src = './assets/img/sem-imagem.png'
        };
        imagem.onclick = enlargedImage

        tdCodigo.innerText = material[i].codigo;
        tdNome.innerText = material[i].nome;
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
