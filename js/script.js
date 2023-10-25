// Função para adicionar filmes à página
function renderFilmes(filmes) {
    const filmesContainer = document.getElementById('filmes-container');

    filmes.filmes.forEach(filme => {
        const filmeDiv = document.createElement('section');
        filmeDiv.classList.add('filme');

        const nome = document.createElement('h2');
        nome.textContent = filme.nome;

        const gênero = document.createElement('p');
        gênero.textContent = `Gênero: ${filme.gênero}`;

        const sinopse = document.createElement('p');
        sinopse.textContent = `Sinopse: ${filme.sinopse}`;

        const anoLancamento = document.createElement('p');
        anoLancamento.textContent = `Ano de Lançamento: ${filme.ano_lancamento}`;

        const linguasDisponiveis = document.createElement('p');
        linguasDisponiveis.textContent = `Línguas Disponíveis: ${filme.linguas_disponiveis.join(', ')}`;

        filmeDiv.appendChild(nome);
        filmeDiv.appendChild(gênero);
        filmeDiv.appendChild(sinopse);
        filmeDiv.appendChild(anoLancamento);
        filmeDiv.appendChild(linguasDisponiveis);

        filmesContainer.appendChild(filmeDiv);
    });
}

fetch('base/filmes.json')
    .then(response => response.json())
    .then(data => renderFilmes(data))
    .catch(error => console.error(error));
