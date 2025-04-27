let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  const campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo Secreto");
  exibirTextoNaTela("p", "Escolha um numero entre 1 e 10.");
}
exibirMensagemInicial();

function verificarChute() {
  const chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    const palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    const mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}, parabéns!`;
    exibirTextoNaTela("p", mensagemTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O numero secreto é menor.");
    } else {
      exibirTextoNaTela("p", "O numero secreto é maior.");
    }
    tentativas++;
    limparCampo();
  }
  console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true); // Garantir que é desabilitado
}

// DESAFIO DO CURSO
// function exibirOla() {
//   console.log("Olá Mundo!");
// }
// exibirOla();

// function exibirOlaNome(nome) {
//   console.log(`Olá, ${nome}`);
// }
// exibirOlaNome("Thais");

// function calcularNumero(numero) {
//   return numero * 2;
// }
// const resultadoDobro = calcularNumero(2);
// console.log(resultadoDobro);

// function calcularMedia(a, b, c) {
//   return (a + b + c) / 3;
// }
// const resultadoMedia = calcularMedia(4, 5, 6);
// console.log(resultadoMedia);

// function encontrarNumeroMaior(a, b) {
//   return a > b ? a : b;
// }
// const resultadoNumeroMaior = encontrarNumeroMaior(20, 6);
// console.log(resultadoNumeroMaior);

// function numeroAoQuadrado(numero) {
//   return numero * numero;
// }
// const resultado = numeroAoQuadrado(8);
// console.log(resultado);
