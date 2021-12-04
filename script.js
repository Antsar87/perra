///////// Variable del juego
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

// Revisando boton Salir
salirValidacion();

///////// Control De Monedas
button.addEventListener('click', () => {
  const valorNumero = Number(input.value);

  // Validacion
  if (valorNumero <= 0) {
    alert('Ingrese un Numero que no sea Menor o Igual a 0');
    return;
  }
  // Validacion

  attribute('set', valorNumero, 0);

  historialMove(`Has introducido monedas.`);

  salirValidacion();
});

// Boton Salir Funcionalidad
salir.addEventListener('click', () => {
  alert(`Ganaste ${MonedasActual} Monedas`);

  attribute('rm', 0, '');

  historialMove('Has sacado las monedas');

  salirValidacion();
});
// Boton Salir Funcionalidad

///////// Control De Monedas

///////// Ruleta

///////// Variables
let num = 0;
const test = document.querySelectorAll('.image');
const palanca = document.getElementById('palanca');
const botonPalanca = document.getElementById('botonPalanca');
let random = [];
///////// Variables

// Palanca para arriba
palanca.setAttribute('src', 'images/palancaUP.png');
// Palanca para arriba

// Pinguinos en html usando un For of
for (const i of test) {
  i.setAttribute('src', `images/pingu.png`);
}
// Pinguinos en html usando un For of

// Boton Palanca Funcionalidad
botonPalanca.addEventListener('click', () => {
  let restaMoneda = MonedasActual - 1;
  // Variable

  // Validacion
  if (MonedasActual === 0) {
    alert('Por favor, introduce monedas');
    return;
  }
  // Validacion

  // bajando Palanca
  palanca.setAttribute('src', 'images/palancaDOWN.png');
  botonPalanca.setAttribute('disabled', '');
  // bajando Palanca

  // Restando y mostrando en Historial
  attribute('', restaMoneda, '');
  historialMove('Gastas una moneda.');
  // Restando y mostrando en Historial

  // Quitando el Disable y Agregando
  if (restaMoneda === 0) {
    salirValidacion();
    attribute('rm', 0, '');
  }
  // Quitando el Disable y Agregando

  // Dar Vueltas ruletas y Subir Palanca
  setTimeout(() => {
    palanca.setAttribute('src', 'images/palancaUP.png');
    let num;
    for (const i of test) {
      num = listaImagenes[Math.floor(Math.random() * listaImagenes.length)];
      random.push(num);
      i.setAttribute('src', `images/${num}.png`);
      botonPalanca.removeAttribute('disabled');
    }
    monedasGanar();

    random.length = 0;
  }, 1000);
  // Dar Vueltas ruletas y Subir Palanca
});
///////// Ruleta

///Functions
function monedasGanar() {
  // Monedas Premios
  if (
    random[0] === listaImagenes[4] &&
    random[1] === listaImagenes[4] &&
    random[2] === listaImagenes[4]
  ) {
    historialMove('¡Tres MONEDAS! Ganas 10 monedas');
    attribute('', MonedasActual + 10, '');
    return;
  } else if (
    (random[0] === listaImagenes[4] && random[1] === listaImagenes[4]) ||
    (random[0] === listaImagenes[4] && random[2] === listaImagenes[4]) ||
    (random[1] === listaImagenes[4] && random[2] === listaImagenes[4])
  ) {
    historialMove('¡Dos MONEDAS! Ganas 4 monedas');
    attribute('', MonedasActual + 4, '');
    return;
  } else if (
    random[0] === listaImagenes[4] ||
    random[1] === listaImagenes[4] ||
    random[2] === listaImagenes[4]
  ) {
    historialMove('¡Una MONEDA! Ganas 1 moneda');
    attribute('', MonedasActual + 1, '');
  }
  // Monedas Premios

  // Frutas Premios
  if (random[0] === random[1] && random[1] === random[2]) {
    historialMove('¡Tres Iguales! Ganas 5 monedas');
    attribute('', MonedasActual + 5, '');
  } else if (
    random[0] === random[1] ||
    random[0] === random[2] ||
    random[1] === random[2]
  ) {
    historialMove('¡Dos Iguales! Ganas 2 monedas');
    attribute('', MonedasActual + 2, '');
  }
  // Frutas Premios
}

// Actualizar las Monedas, dar valor, y desabilitar o remover desabilitar
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

// Agregar al historial
function historialMove(mensaje) {
  var node = document.createElement('li');
  var textnode = document.createTextNode(mensaje);
  node.appendChild(textnode);
  historial.appendChild(node);
}

// agregar o remover disabilitado
function salirValidacion() {
  if (input.value === '') {
    salir.setAttribute('disabled', '');
  } else {
    salir.removeAttribute('disabled');
  }
}
