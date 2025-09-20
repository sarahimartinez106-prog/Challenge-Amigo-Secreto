// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar entrada
  if (nombre === "") {
    alert("Por favor escribe un nombre válido.");
    return;
  }

  // Agregar a la lista
  amigos.push(nombre);

  // Mostrar lista actualizada
  mostrarLista();

  // Limpiar campo
  input.value = "";
}

// Función para mostrar la lista en el <ul>
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiar la lista anterior

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  // Validar que haya amigos
  if (amigos.length === 0) {
    alert("No hay nombres en la lista para sortear.");
    return;
  }

  // Obtener índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar resultado
  resultado.innerHTML = ""; // limpiar resultado previo
  const li = document.createElement("li");
  li.textContent = "🎉 El amigo secreto es: " + amigoSorteado;
  resultado.appendChild(li);
}
