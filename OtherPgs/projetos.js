var corpo = window.document.body;
var p1 = window.document.getElementsByTagName("p")[0];
var d = window.document.querySelector("div#res");
function somar() {
  var tn1 = window.document.getElementById("txt1");
  var tn2 = window.document.getElementById("txt2");
  var res = window.document.getElementById("res");
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var s = n1 + n2;
  res.innerHTML = s;
}

var a = document.getElementById("area");
a.addEventListener("click", clicar);
a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseout", sair);

function clicar() {
  // a.innerText = "Clicou!"; // innerText > muda o texto atual
  a.style.background = "red";
}

function entrar() {
  // a.innerText = "Entrou!";
  a.style.background = "green";
}

function sair() {
  // a.innerText = "Saiu!";
  a.style.background = "none";
}

let pais = "Canada";
console.log(`Vivendo em ${pais}`);
if (pais == "Brasil") {
  console.log("Voce é Brasileiro");
} else {
  console.log("Voce é estrangeiro");
}

function calcularVel() {
  let txtvel = window.document.getElementById("txtvel");
  let res = window.document.getElementById("respostaVel");
  let vel = Number(txtvel.value);
  res.innerHTML = `Sua velocidadde foi de <strong> ${vel}  KM/h </strong>`;

  if (vel > 60) {
    res.innerHTML = "Voce esta Multado, SEM VERGONHA !!";
  } else {
    res.innerHTML = `<strong> ${vel}Km/h </strong> Esta dentro do permitido`;
  }
}

function verificarNasc() {
  let txtNasc = document.getElementById("txtNasc");
  let respsota = document.getElementById("respostaNasc");
  let resp = txtNasc.value;

  if (resp == "Brasil") {
    respsota.innerHTML = `Voce é em Brasileiro`;
  } else {
    respsota.innerHTML = `Voce é Estrangeiro (${resp})`;
  }
}

function VerificarIdade() {
  let txtIdade = document.getElementById("txtIdade");
  let respIdade = document.getElementById("respostaIdade");
  let resposta = txtIdade.value;

  if (resposta <= 15) {
    respIdade.innerHTML = `Sua idade é ${resposta} anos, NÃO PODE votar`;
  } else if (resposta < 18 || resposta >= 65) {
    respIdade.innerHTML = `Sua idade é ${resposta} anos, Pode mas não é obrigatorio`;
  } else {
    respIdade.innerHTML = `Sua idade é ${resposta} anos, Voto obrigatorio `;
  }
}

function Verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("resp");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("erro");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gen = "";
    if (fsex[0].checked) {
      gen = "homem";
    } else if (fsex[1].checked) {
      gen = "mulher";
    }
    res.style.textAlign = "center";
    res.innerHTML = `Você é ${gen}, nascido(a) em ${idade} `;
  }
}

function multiplicar() {
  let x = parseInt(document.getElementById("idInicio").value);
  let res = document.getElementById("restab");
  res.innerHTML = "Resposta";
  if (x == 0) {
    window.alert("Coloque um numero maior que 0");
  } else {
    for (i = 1; i <= 10; i++) {
      res.innerHTML += `<br> ${i} x ${x} = ${i * x} <br>`;
    }
  }
}

const values = [];
const adicionar = () => {
  const inicio = parseInt(document.getElementById("idInicioAnalis").value);
  const select = document.getElementById("idSelectAnalis");

  const item = document.createElement("option");
  item.text = `valor ${inicio} adicionado`;
  select.appendChild(item);
  values.push(inicio);
};

const finalizar = () => {
  const res = document.querySelector("#resAnalis");
  let maior = Number(values[0]);
  let menor = Number(values[0]);
  let soma = 0;
  let media = 0;

  for (let element of values) {
    if (maior < element) {
      maior = element;
    } else {
      menor = element;
    }

    soma += element;
  }
  media = soma / values.length;

  res.innerHTML = `Ao todo temos ${values.length} itens<p> O maior numero é ${maior}</p> <p>O menor é ${menor}</p> <p>A soma é ${soma}</p> A media é ${media}`;
};
