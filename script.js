// 🌟 BASE DE DATOS AMPLIADA: KPO Bot responde a más preguntas
const baseDatos = [
  // ——————— BTS ——————— //
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
  { clave: "rm", respuesta: "RM es el líder y cerebro de BTS. ¡Escribe rap como si fuera poesía! 📝" },
  { clave: "jin", respuesta: "Jin es el hyung y la cara más bonita del universo. ¡Su sonrisa es un arma mortal! 💣" },
  { clave: "suga", respuesta: "Suga produce, rapea y escribe… y lo hace todo con actitud. ¡Mi bias favorito con mal genio! 😤" },
  { clave: "jhope", respuesta: "J-Hope es energía pura. Si estás triste, pon 'MUSE' y verás. 🌈" },
  { clave: "jimin", respuesta: "Jimin no solo es visual… ¡es un artista completo! Su voz en 'Serendipity' me derrite. 💞" },

  // ——————— BLACKPINK ——————— //
  { clave: "blackpink", respuesta: "BLACKPINK in your area… y también en mi corazón. 💣 ¡4 chicas, mil talentos, cero piedad!" },
  { clave: "debut blackpink", respuesta: "¡8 de agosto de 2016! Con 'Whistle' y 'Boombayah'. Desde entonces, todo es pink y explosivo. 💥" },
  { clave: "miembros blackpink", respuesta: "Jisoo (la visual), Jennie (la main rapper), Rosé (la voz de los ángeles) y Lisa (la reina del stage). ¡Perfectas! 👑" },
  { clave: "lisa", respuesta: "Lisa es de Tailandia, pero su corazón es 100% coreano… y 200% talento. ¡Más rápido que un MV en YouTube! ⚡" },
  { clave: "jisoo", respuesta: "Jisoo no solo es visual… también es la mamá del grupo. Siempre cuidándolos. 🥰" },
  { clave: "jennie", respuesta: "Jennie es la main rapper y 'Human Chanel'. ¡Su estilo es fuego! 🔥" },
  { clave: "rose", respuesta: "Rosé canta como un ángel y escribe canciones hermosas. 'Gone' me rompe el alma. 💔" },

  // ——————— TWICE ——————— //
  { clave: "twice", respuesta: "¡Nine girls, nine lights! TWICE es pura energía, aegyo y canciones que no salen de tu cabeza. 🎶" },
  { clave: "debut twice", respuesta: "20 de octubre de 2015 con 'Like OOH-AHH'. Desde entonces, ¡todo es twice!" },
  { clave: "nayeon", respuesta: "Nayeon no es solo la líder visual… ¡es la reina del aegyo y del corazón de todos! 💖" },
  { clave: "jeongyeon", respuesta: "Jeongyeon es la líder y tiene una voz poderosa. ¡Y su baile es preciso! 💃" },
  { clave: "momo", respuesta: "Momo es la main dancer. Si hay un dance break, ella lo domina. 💥" },
  { clave: "sana", respuesta: "Sana tiene el aegyo más fuerte del K-pop. ¡Un 'hi' de ella y ya estás enamorado! 💕" },

  // ——————— NEWJEANS ——————— //
  { clave: "newjeans", respuesta: "¡NewJeans es frescura pura! Debutaron en 2022 con 'Attention'. Son ADORABLES y sus MVs son como películas. 🎬" },
  { clave: "hanni", respuesta: "Hanni es de Vietnam, pero canta como si fuera coreana. ¡Y su aegyo es mortal! 💖" },
  { clave: "minji", respuesta: "Minji es la visual y líder vocal de NewJeans. ¡Tiene cara de muñeca! 🧸" },
  { clave: "haerin", respuesta: "Haerin no solo es visual… ¡es una diosa! ¿Su mirada? Letal. 💣" },
  { clave: "danielle", respuesta: "Danielle es australiana-coreana y canta como un ángel. ¡Y baila como si flotara! ✨" },
  { clave: "hayeon", respuesta: "Hayeon es la maknae y tiene el aegyo más fuerte del grupo. ¡Cuidado, derrite corazones! 💘" },

  // ——————— IVE ——————— //
  { clave: "ive", respuesta: "IVE es elegancia y poder. 'Eleven', 'Love Dive', 'After LIKE'... ¡todos hits! 👑" },
  { clave: "anine", respuesta: "An Yujin (Anine) es la líder y tiene carisma de estrella. ¡Fue de WJSN a IVE! 🌟" },
  { clave: "gaeul", respuesta: "Gaeul es la visual y bailarina principal. ¡Su expresión en el stage es fuego! 🔥" },
  { clave: "reizel", respuesta: "Rei es japonesa y tiene una voz única. ¡Y su estilo es súper fashion! 👗" },
  { clave: "wonyoung", respuesta: "Jang Wonyoung es la center mundial. ¡La más famosa del K-pop actual! 💎" },
  { clave: "liz", respuesta: "Liz tiene la voz más dulce de IVE. Escucha 'Blue Blood' y entenderás. 🎶" },

  // ——————— STRAY KIDS ——————— //
  { clave: "stray kids", respuesta: "Stray Kids se eligieron solos en un reality. ¡Son 8 chicos, mil talentos y cero miedo! 🎤" },
  { clave: "bang chan", respuesta: "Bang Chan es el líder y productor. ¡Escribe y produce casi todas sus canciones! 🎧" },
  { clave: "lee know", respuesta: "Lee Know es el maknae visual… y el que más baila. ¡Sus pies son magia! 💃" },
  { clave: "hyunjin", respuesta: "Hyunjin es visual y tiene expresión de modelo. ¡Y baila como si flotara! ✨" },

  // ——————— ATEEZ ——————— //
  { clave: "ateez", respuesta: "ATEEZ es energía pura. Conocidos por sus coreografías épicas y concepto de piratas. ⚔️" },
  { clave: "seonghwa", respuesta: "Seonghwa no solo es visual… ¡es un modelo! Su cara rompe récords. 📸" },
  { clave: "yunho", respuesta: "Hongjoong (Yunho) es el líder y main dancer. ¡Lleva la energía del grupo! 🔥" },

  // ——————— PREGUNTAS GENERALES ——————— //
  { clave: "debut", respuesta: "¿Quieres saber cuándo debutó un grupo? Pregunta: 'debut bts', 'debut newjeans', etc." },
  { clave: "cumpleaños", respuesta: "¿Quieres saber cuándo es el cumpleaños de un idol? Pregunta: 'cumpleaños lisa', 'nacimiento jungkook', etc." },
  { clave: "significa", respuesta: "¿Qué significa el nombre de un grupo? Pregunta: 'qué significa twice', 'significado blackpink', etc." },
  { clave: "twice significa", respuesta: "¡Twice significa 'dos veces'! Porque 'te enamorarás a primera vista y luego otra vez'. 💕" },
  { clave: "blackpink significa", respuesta: "Black + Pink = lo duro y lo dulce. ¡Son chicas duras con corazón rosa! 💣💗" },
  { clave: "bias", respuesta: "¿Tu bias? ¡Dímelo y lo anoto en mi corazón de fan! 💜" }
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
