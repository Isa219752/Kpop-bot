// 🌟 KPO BOT - Versión 100% funcional
const baseDatos = [
  // ——————— PREGUNTAS GENERALES ——————— //
  { clave: "hola", respuesta: "¡Hola, KPOlover! 💜 Soy Luna, tu bias bot favorita. ¿De qué grupo quieres hablar hoy?" },
  { clave: "adiós", respuesta: "¿Ya te vas? 😢 No olvides seguirme en mi corazón de fan eterno. ¡Bye-bye, maknae!" },
  { clave: "gracias", respuesta: "¡De nada, mi bias! 💖 ¿Sabías que SEVENTEEN cocina mejor que muchos chefs? ¡Y eso es decir mucho!" },

  // ——————— BTS ——————— //
  { clave: "bts", respuesta: "¡BTS! Los 7 reyes del mundo. Si no los amas, revisa tu corazón… puede que no esté latiendo. 💔" },
  { clave: "debut bts", respuesta: "¡13 de junio de 2013! Con '2 Cool 4 Skool'. Desde ese día, el mundo cambió. #BangtanSociety" },
  { clave: "miembros bts", respuesta: "RM, Jin, Suga, J-Hope, Jimin, V y Jungkook… o como los llamo yo: los 7 ángeles caídos del cielo del K-pop. 🌟" },
  { clave: "maknae bts", respuesta: "¡Jungkook! El golden maknae, el que canta, baila, produce… y me rompe el corazón todos los días. 💘" },
  { clave: "jungkook", respuesta: "¡Jungkook! El golden maknae, el que canta, baila, produce… y me rompe el corazón todos los días. 💘" },

  // ——————— BLACKPINK ——————— //
  { clave: "blackpink", respuesta: "BLACKPINK in your area… y también en mi corazón. 💣 ¡4 chicas, mil talentos, cero piedad!" },
  { clave: "debut blackpink", respuesta: "¡8 de agosto de 2016! Con 'Whistle' y 'Boombayah'. Desde entonces, todo es pink y explosivo. 💥" },
  { clave: "miembros blackpink", respuesta: "Jisoo (la visual), Jennie (la main rapper), Rosé (la voz de los ángeles) y Lisa (la reina del stage). ¡Perfectas! 👑" },
  { clave: "lisa", respuesta: "Lisa es de Tailandia, pero su corazón es 100% coreano… y 200% talento. ¡Más rápido que un MV en YouTube! ⚡" },

  // ——————— NEWJEANS ——————— //
  { clave: "newjeans", respuesta: "¡NewJeans es frescura pura! Debutaron en 2022 con 'Attention'. Son ADORABLES y sus MVs son como películas. 🎬" },
  { clave: "debut newjeans", respuesta: "¡NewJeans debutó en 2022 con 'Attention'! Desde entonces, han conquistado el mundo con su estilo único. 🌟" },
  { clave: "hanni", respuesta: "Hanni es de Vietnam, pero canta como si fuera coreana. ¡Y su aegyo es mortal! 💖" },
  { clave: "haerin", respuesta: "Haerin no solo es visual… ¡es una diosa! ¿Su mirada? Letal. 💣" },

  // ——————— IVE ——————— //
  { clave: "ive", respuesta: "IVE es elegancia y poder. 'Eleven', 'Love Dive', 'After LIKE'... ¡todos hits! 👑" },
  { clave: "wonyoung", respuesta: "Jang Wonyoung es la center mundial. ¡La más famosa del K-pop actual! 💎" },

  // ——————— PALABRAS CLAVE CORTAS ——————— //
  { clave: "debut", respuesta: "¿Quieres saber cuándo debutó un grupo? Pregunta: 'debut bts', 'debut newjeans', etc." },
  { clave: "significado", respuesta: "¿Qué significa el nombre de un grupo? Pregunta: 'qué significa twice', 'significado blackpink', etc." },
  { clave: "cumpleaños", respuesta: "¿Quieres saber cuándo es el cumpleaños de un idol? Pregunta: 'cumpleaños lisa', 'nacimiento jungkook', etc." }
];

// 🔊 CONTROL DE VOZ
let vozActivada = false;
const botonVoz = document.getElementById("voz-btn");

function toggleVoz() {
  vozActivada = !vozActivada;
  botonVoz.textContent = vozActivada ? "🔊" : "🔇";
  agregarMensaje(vozActivada ? "¡Voz encendida! 🎤 ¡Luna está lista para hablar!" : "Shhh… silencio de bias. 🤫", "bot");
}

// 🤖 AGREGAR MENSAJE AL CHAT
function agregarMensaje(texto, tipo) {
  const chatBox = document.getElementById("chat-box");
  const mensaje = document.createElement("div");
  mensaje.className = `message ${tipo}`;
  mensaje.textContent = texto;
  chatBox.appendChild(mensaje);
  chatBox.scrollTop = chatBox.scrollHeight;

  if (tipo === "bot" && vozActivada) {
    hablar(texto);
  }
}

// 🔊 HACER QUE EL BOT HABLE
function hablar(texto) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = texto;

  const voices = window.speechSynthesis.getVoices();
  const femaleVoice = voices.find(v => v.lang.includes("es") && (v.name.includes("Google") || v.name.includes("Sara")));
  utterance.voice = femaleVoice || voices.find(v => v.lang.includes("es")) || null;
  utterance.rate = 0.9;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}

// 🚀 ENVIAR MENSAJE
function enviar() {
  const input = document.getElementById("user-input");
  const pregunta = input.value.trim().toLowerCase();

  if (pregunta === "") return;

  agregarMensaje(pregunta, "user");

  let respuesta = "¡Oops! No sé eso… pero dime de qué grupo o idol es y buscaré en mi corazón de fan. 💓";

  // Buscar coincidencia en clave
  for (let item of baseDatos) {
    if (pregunta.includes(item.clave)) {
      respuesta = item.respuesta;
      break;
    }
  }

  setTimeout(() => {
    agregarMensaje(respuesta, "bot");
  }, 800);

  input.value = "";
}

// 🎵 Cargar voces
window.speechSynthesis.onvoiceschanged = () => {
  console.log("Voces de KPO Bot cargadas 💜");
};
