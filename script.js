///////// Variables
const boxImages = document.getElementById('images');

const boxPalanca = document.getElementById('palanca');

const input = document.getElementById('input');

const button = document.getElementById('button');

const valorMoneda = document.getElementById('valorMoneda');

const salir = document.getElementById('salir');

const historial = document.getElementById('historial');

const listaImagenes = [
  'aubergine',
  'banana',
  'carrots',
  'cherries',
  'dollar',
  'lemon',
  'orange',
  'peach',
  'potato',
  'tomato',
];

let MonedasActual = 0;
///////// Variables

salirValidacion();

///////// Control De Monedas
button.addEventListener('click', () => {
  const valorNumero = Number(input.value);

  if (valorNumero <= 0) {
    alert('Ingrese un Numero que no sea Menor o Igual a 0');
    return;
  }
  attribute('set', valorNumero, 0);
  historialMove(`Has introducido monedas.`);
  salirValidacion();
});

salir.addEventListener('click', () => {
  alert(`Ganaste ${MonedasActual} Monedas`);
  attribute('rm', 0, '');
  salirValidacion();
});

///////// Control De Monedas

///////// Ruleta
let num = 0;
const test = document.querySelectorAll('.image');
const palanca = document.getElementById('palanca');
const botonPalanca = document.getElementById('botonPalanca');
///////// Variables

palanca.setAttribute('src', 'images/palancaUP.png');

for (const i of test) {
  i.setAttribute('src', `images/pingu.png`);
}

botonPalanca.addEventListener('click', () => {
  let restaMoneda = MonedasActual - 1;

  if (MonedasActual === 0) {
    alert('Por favor, introduce monedas');
    return;
  }

  palanca.setAttribute('src', 'images/palancaDOWN.png');
  botonPalanca.setAttribute('disabled', '');

  attribute('', restaMoneda, '');
  historialMove('Gastas una moneda.');

  if (restaMoneda === 0) {
    salirValidacion();
    attribute('rm', 0, '');
  }

  setTimeout(() => {
    palanca.setAttribute('src', 'images/palancaUP.png');
    for (const i of test) {
      i.setAttribute(
        'src',
        `images/${
          listaImagenes[Math.floor(Math.random() * listaImagenes.length)]
        }.png`
      );
      botonPalanca.removeAttribute('disabled');
    }
  }, 1000);
});
///////// Ruleta

///Functions

function attribute(type, number, valueInput) {
  MonedasActual = number;
  input.value = valueInput;
  valorMoneda.innerHTML = MonedasActual;
  if (type === 'set') {
    button.setAttribute('disabled', '');
    input.setAttribute('disabled', '');
  } else if (type === 'rm') {
    button.removeAttribute('disabled');
    input.removeAttribute('disabled');
  }
}

function historialMove(mensaje) {
  var node = document.createElement('li');
  var textnode = document.createTextNode(mensaje);
  node.appendChild(textnode);
  historial.appendChild(node);
}

function salirValidacion() {
  if (input.value === '') {
    salir.setAttribute('disabled', '');
  } else {
    salir.removeAttribute('disabled');
  }
}
