// Definimos las tasas de interés
const tasas = [
    { dias: 30, tasa: 0.08 },
    { dias: 60, tasa: 0.16 },
    { dias: 90, tasa: 0.25 },
  ];
  
// Obtenemos los elementos del DOM
const capitalInput = document.getElementById("capital");
const plazoInput = document.getElementById("plazo");
const resultadoDiv = document.getElementById("resultado");
  
// Agregamos los eventos
capitalInput.addEventListener("input", actualizarResultado);
plazoInput.addEventListener("input", actualizarResultado);
  
// Definimos la función para actualizar el resultado
function actualizarResultado() {
    // Obtenemos los datos del usuario
    const capital = parseFloat(capitalInput.value);
    const plazo = parseInt(plazoInput.value);
  
    // Buscamos la tasa correspondiente al plazo ingresado
    const tasa = tasas.find(function (t) {
        return t.dias === plazo;
    }).tasa;
  
    // Calculamos los intereses
    const intereses = capital * (tasa / 100) * (plazo / 365);
    const total = capital + intereses
  
    // Mostramos los resultados
    resultadoDiv.innerHTML = `
    Capital: $${capital.toFixed(2)}<br />
    Tasa: ${(tasa * 100).toFixed(2)}%<br />
    Plazo: ${plazo} días<br />
    Intereses: $${intereses.toFixed(2)}<br />
    Total: $${total.toFixed(2)}
  `;
  
    // Guardamos los datos en localStorage
    localStorage.setItem("capital", capital);
    localStorage.setItem("plazo", plazo);
}
  
// Cargamos los datos guardados en localStorage
if (localStorage.getItem("capital")) {
    capitalInput.value = localStorage.getItem("capital");
}
  
if (localStorage.getItem("plazo")) {
    plazoInput.value = localStorage.getItem("plazo");
}

// Actualizamos el resultado al cargar la página
actualizarResultado();