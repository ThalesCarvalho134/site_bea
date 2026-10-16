const perguntas = [
    { p: "Qual foi a música de debut do NewJeans?", opcoes: ["A - Attention", "B - Hype Boy", "C - Cookie", "D - Ditto"], correta: "A" },
    { p: "Qual a data de debut com Attention?", opcoes: ["A - 22/07/2022", "B - 01/08/2022", "C - 06/10/2022", "D - 19/12/2022"], correta: "A" },
    { p: "Qual o último lançamento OFICIAL do NewJeans?", opcoes: ["A - Supernatural", "B - How Sweet", "C - OMG", "D - Get Up"], correta: "A" },
    { p: "Como se chama o fandom do NewJeans?", opcoes: ["A - Bunnies", "B - Tokki", "C - Ambas corretas", "D - Nenhuma"], correta: "C" },
    { p: "Quem é a Eonnie (mais velha)?", opcoes: ["A - Hanni", "B - Minji", "C - Danielle", "D - Hyein"], correta: "B" },
    { p: "Quem é a Maknae (mais nova)?", opcoes: ["A - Haerin", "B - Minji", "C - Hyein", "D - Hanni"], correta: "C" }
];

let pontos = 0, indice = 0, tempoRestante = 10, timer;

function iniciarTimer() {
    tempoRestante = 10;
    document.getElementById("tempo").textContent = tempoRestante;
    clearInterval(timer);
    timer = setInterval(() => {
        tempoRestante--;
        document.getElementById("tempo").textContent = tempoRestante;
        if (tempoRestante <= 0) {
            clearInterval(timer);
            verificar("X");
        }
    }, 1000);
}

function exibirPergunta() {
    const containerPergunta = document.getElementById("pergunta-texto");
    const containerOpcoes = document.getElementById("opcoes-container");
    containerOpcoes.innerHTML = "";
    containerPergunta.textContent = perguntas[indice].p;

    perguntas[indice].opcoes.forEach(op => {
        const btn = document.createElement("button");
        btn.textContent = op;
        btn.className = "botao-estilizado";
        btn.onclick = () => verificar(op[0]);
        containerOpcoes.appendChild(btn);
    });
    iniciarTimer();
}

function verificar(letra) {
    clearInterval(timer);
    if (letra === perguntas[indice].correta) pontos++;
    
    indice++;
    if (indice < perguntas.length) exibirPergunta();
    else {
        document.querySelector(".moldura-quiz").innerHTML = `
            <h2>Fim do Quiz!</h2>
            <p>Você fez ${pontos} de ${perguntas.length} pontos.</p>
            <button class="botao-estilizado" onclick="window.location.href='index.html'">Voltar ao início</button>
        `;
    }
}

exibirPergunta();
