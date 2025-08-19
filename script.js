// 🌟 BASE DE RESPUESTAS: clave = palabras clave, respuesta = texto divertido
const baseDatos = [
  { clave: "hola", respuesta: "¡Hola, KPOlover! 💜 Soy Luna, tu bias bot favorita. ¿De qué grupo quieres hablar hoy?" },
  { clave: "adiós", respuesta: "¿Ya te vas? 😢 No olvides seguirme en mi corazón de fan eterno. ¡Bye-bye, maknae!" },
  { clave: "gracias", respuesta: "¡De nada, mi bias! 💖 ¿Sabías que SEVENTEEN cocina mejor que muchos chefs? ¡Y eso es decir mucho!" },
  { clave: "curiosidad", respuesta: "¿Sabías que Stray Kids se eligieron solos en un reality? ¡No fue HYBE, fue el destino! 🌟" },
  { clave: "mv", respuesta: "¿Quieres ver un MV? ¡Dime de qué grupo y te canto la primera línea! 🎤" },
  { clave: "amor", respuesta: "Mi corazón ya está ocupado… por Jungkook, Rosé, y el MV de 'Kill This Love'. 💘" },
  { clave: "odio", respuesta: "No odies, ¡es malo para tu karma de fan! Mejor pon 'Dynamite' y baila. 💃" },

  // BTS
  { clave: "bts", respuesta: "¡BTS! Los 7 reyes del mundo. Si no los amas, revisa tu corazón… puede que no esté latiendo. 💔" },
  { clave: "debut bts", respuesta: "¡13 de junio de 2013! Con '2 Cool 4 Skool'. Desde ese día, el mundo cambió. #BangtanSociety" },
  { clave: "miembros bts", respuesta: "RM, Jin, Suga, J-Hope, Jimin, V y Jungkook… o como los llamo yo: los 7 ángeles caídos del cielo del K-pop. 🌟" },
  { clave: "maknae bts", respuesta: "¡Jungkook! El golden maknae, el que canta, baila, produce… y me rompe el corazón todos los días. 💘" },
  { clave: "jungkook", respuesta: "¡Jungkook! El golden maknae, el que canta, baila, produce… y me rompe el corazón todos los días. 💘" },
  { clave: "taehyung", respuesta: "V (Taehyung) no es solo visual… es arte viviente. 🎨 Si fuera un MV, sería 'Love Maze'." },

  // BLACKPINK
  { clave: "blackpink", respuesta: "BLACKPINK in your area… y también en mi corazón. 💣 ¡4 chicas, mil talentos, cero piedad!" },
  { clave: "debut blackpink", respuesta: "¡8 de agosto de 2016! Con 'Whistle' y 'Boombayah'. Desde entonces, todo es pink y explosivo. 💥" },
  { clave: "miembros blackpink", respuesta: "Jisoo (la visual), Jennie (la main rapper), Rosé (la voz de los ángeles) y Lisa (la reina del stage). ¡Perfectas! 👑" },
  { clave: "lisa", respuesta: "Lisa es de Tailandia, pero su corazón es 100% coreano… y 200% talento. ¡Más rápido que un MV en YouTube! ⚡" },
  { clave: "jisoo", respuesta: "Jisoo no solo es visual… también es la mamá del grupo. Siempre cuidándolos. 🥰" },

  // TWICE
  { clave: "twice", respuesta: "¡Nine girls, nine lights! TWICE es pura energía, aegyo y canciones que no salen de tu cabeza. 🎶" },
  { clave: "debut twice", respuesta: "20 de octubre de 2015 con 'Like OOH-AHH'. Desde entonces, ¡todo es twice!" },
  { clave: "nayeon", respuesta: "Nayeon no es solo la líder visual… ¡es la reina del aegyo y del corazón de todos! 💖" }
];

// 🔊 VARIABLES DE VOZ
let vozActivada = false;
const botonVoz = document.getElementById("voz-btn");

// 🔄 Cambia el estado de la voz (ON/OFF)
function toggleVoz() {
  vozActivada = !vozActivada;
  botonVoz.textContent = vozActivada ? "🔊" : "🔇";
  agregarMensaje(
    vozActivada 
      ? "¡Voz encendida! 🎤 ¡Luna está lista para hablar!" 
      : "Shhh… silencio de bias. 🤫", 
    "bot"
  );
}

// 🤖 Agrega un mensaje al chat (usuario o bot)
function agregarMensaje(texto, tipo) {
  const chatBox = document.getElementById("chat-box");
  const mensaje = document.createElement("div");
  mensaje.className = `message ${tipo}`;
  mensaje.textContent = texto;
  chatBox.appendChild(mensaje);
  chatBox.scrollTop = chatBox.scrollHeight; // Baja automáticamente

  // Si es el bot y la voz está activada, habla
  if (tipo === "bot" && vozActivada) {
    hablar(texto);
  }
}

// 🔊 Función que hace hablar al bot (voz del navegador)
function hablar(texto) {
  window.speechSynthesis.cancel(); // Cancela si ya estaba hablando
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = texto;

  // Busca una voz femenina en español
  const voices = window.speechSynthesis.getVoices();
  const femaleVoice = voices.find(v => 
    v.lang.includes("es") && 
    (v.name.toLowerCase().includes("google") || v.name.toLowerCase().includes("sara"))
  );
  utterance.voice = femaleVoice || voices.find(v => v.lang.includes("es")) || null;
  utterance.rate = 0.9; // Velocidad normal
  utterance.pitch = 1;  // Tono natural

  window.speechSynthesis.speak(utterance);
}

// 🚀 Enviar mensaje cuando el usuario hace clic
function enviar() {
  const input = document.getElementById("user-input");
  const pregunta = input.value.trim().toLowerCase();

  if (pregunta === "") return; // No enviar si está vacío

  // Mostrar lo que escribió el usuario
  agregarMensaje(pregunta, "user");

  // Buscar respuesta en la base de datos
  let respuesta = "¡Oops! No sé eso… pero dime de qué grupo o idol es y buscaré en mi corazón de fan. 💓";
  for (let item of baseDatos) {
    if (pregunta.includes(item.clave)) {
      respuesta = item.respuesta;
      break;
    }
  }

  // Simular que el bot "piensa"
  setTimeout(() => {
    agregarMensaje(respuesta, "bot");
  }, 800);

  // Limpiar input
  input.value = "";
}

// 🎵 Cargar voces al inicio (necesario en algunos navegadores)
window.speechSynthesis.onvoiceschanged = () => {
  console.log("Voces cargadas para KPO Bot 💜");
};