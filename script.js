const messages = [
    "Eres la razón por la que sonrío cada día.",
    "Cada momento contigo es un regalo.",
    "Tu amor ilumina mi vida de una manera única.",
    "Contigo, cada día es una nueva aventura.",
    "Eres mi sueño hecho realidad.",
    "Mi corazón es tuyo para siempre.",
    "Tu sonrisa es mi lugar feliz.",
    "Siempre estaré aquí para ti, en las buenas y en las malas.",
    "Eres más que suficiente para mí.",
    "A tu lado, he encontrado mi hogar.",
    "Tu amor es el mejor regalo que he recibido.",
    "Eres mi inspiración diaria.",
    "Contigo, el tiempo vuela.",
    "Te quiero más de lo que las palabras pueden expresar.",
    "Eres mi sol en los días nublados.",
    "Juntos, hacemos el mejor equipo.",
    "Me haces sentir completo/a.",
    "Eres el motivo de mis sonrisas.",
    "Siempre haces que mi corazón lata más rápido.",
    "Eres el sueño que nunca quiero despertar.",
    "Tu amor es mi mayor tesoro.",
    "Cada día a tu lado es una bendición.",
    "Eres la melodía que alegra mi vida.",
    "Me encanta la forma en que me entiendes.",
    "Tu risa es mi sonido favorito.",
    "No hay nadie como tú en el mundo.",
    "Eres la mejor parte de mi día.",
    "Cada beso tuyo es un cuento de hadas.",
    "Tu amor me da fuerzas para enfrentar cualquier desafío.",
    "Te elijo hoy y siempre.",
    "Eres la respuesta a todas mis preguntas.",
    "Me haces querer ser una mejor persona.",
    "Contigo, he encontrado el verdadero amor.",
    "Tu felicidad es mi prioridad."
];

let usedMessages = []; // Array para guardar los mensajes que ya se han mostrado

function generateMessage() {
    if (usedMessages.length === messages.length) {
        // Reinicia el array de mensajes usados si todos han sido mostrados
        usedMessages = [];
    }

    let messageIndex;

    do {
        messageIndex = Math.floor(Math.random() * messages.length);
    } while (usedMessages.includes(messageIndex)); // Asegúrate de que no se repita

    usedMessages.push(messageIndex); // Agrega el índice del mensaje usado al array
    document.getElementById('message').innerText = messages[messageIndex]; // Muestra el mensaje
}

// Asocia la función al botón
document.getElementById('generate-button').addEventListener('click', generateMessage);
