const input = document.getElementById('input');
const button = document.getElementById('button');
const valorMoneda = document.getElementById('valorMoneda');
const salir = document.getElementById('salir');

let MonedasActual = 0;

salirValidacion();

button.addEventListener('click', () => {
  const valorNumero = Number(input.value);
  
  if (valorNumero <= 0) {
    alert("Ingrese un Numero que no sea Menor o Igual a 0")
    return;
  }
  attribute('set', valorNumero, 0);
  salirValidacion();
});

salir.addEventListener('click', () => {
  alert(`Ganaste ${MonedasActual} Monedas`);
  attribute('rm', 0, '');
  salirValidacion();
});

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

function salirValidacion() {
  if (input.value === '') {
    salir.setAttribute('disabled', '');
  } else {
    salir.removeAttribute('disabled');
  }
}
