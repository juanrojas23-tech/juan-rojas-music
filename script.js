const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("menu-abierto");

        if (menu.classList.contains("menu-abierto")) {

            menuToggle.textContent = "✕";

            menuToggle.setAttribute(
                "aria-label",
                "Cerrar menú"
            );

        } else {

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menú"
            );

        }

    });


    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("menu-abierto");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menú"
            );

        });

    });

}

// =========================================================
// CHAT DE PREGUNTAS FRECUENTES
// =========================================================

const chatFaqBoton = document.getElementById("chatFaqBoton");
const chatFaqVentana = document.getElementById("chatFaqVentana");
const chatFaqCerrar = document.getElementById("chatFaqCerrar");
const chatFaqContenido = document.getElementById("chatFaqContenido");
const chatPreguntas = document.getElementById("chatPreguntas");

const preguntasFAQ = [
    {
        pregunta: "🎻 ¿Qué instrumentos enseñas?",
        respuesta:
            "Ofrezco clases de violín, viola, piano, guitarra y técnica vocal. Cada proceso se adapta al nivel y a los objetivos del estudiante."
    },
    {
        pregunta: "👨‍🎓 ¿Para qué edades son las clases?",
        respuesta:
            "Las clases están dirigidas a niños, jóvenes y adultos. El contenido y la metodología se adaptan a la edad, experiencia y objetivos de cada estudiante."
    },
    {
        pregunta: "📚 ¿Qué niveles manejas?",
        respuesta:
            "Ofrecemos clases de iniciación e intermedio en violín, viola, piano, guitarra y técnica vocal. El proceso se adapta al nivel actual y a los objetivos de cada estudiante."
    },
    {
        pregunta: "📍 ¿Dónde se realizan las clases?",
        respuesta:
            "Las clases presenciales son a domicilio en Cúcuta y su área metropolitana. Si el estudiante no puede recibir la clase en su hogar, también contamos con un espacio disponible para realizarla. Para quienes viven fuera de Cúcuta y su área metropolitana, ofrecemos la modalidad virtual."
    },
    {
        pregunta: "💻 ¿Cómo funcionan las clases virtuales?",
        respuesta:
            "Las clases virtuales se realizan mediante Google Meet, donde trabajamos de manera personalizada según el nivel y los objetivos del estudiante. Durante las clases se utilizan materiales didácticos, ejercicios y métodos específicos para cada instrumento. También se brindan materiales de apoyo para continuar practicando y avanzando entre una clase y otra."
    },
    {
        pregunta: "🎼 ¿Necesito saber música antes de empezar?",
        respuesta:
            "No es necesario tener conocimientos previos de música para comenzar las clases. Al iniciar, realizamos un diagnóstico para conocer qué sabe el estudiante y en qué aspectos necesita fortalecer sus conocimientos. A partir de este diagnóstico, se establece un programa de clases personalizado, en el que la formación teórica musical se desarrolla de manera progresiva junto con el instrumento que el estudiante elija."
    },
    {
        pregunta: "🎻 ¿Necesito tener mi propio instrumento?",
        respuesta:
            "Sí, es indispensable contar con un instrumento propio para desarrollar adecuadamente el proceso de aprendizaje. Tener el instrumento disponible permite practicar durante las horas en las que no está en clase, reforzar lo aprendido y avanzar de manera constante. La práctica entre clases es fundamental para que el progreso sea realmente notorio."
    },
    {
        pregunta: "💰 ¿Cuánto cuestan las clases?",
        respuesta:
            "El valor de las clases depende de la modalidad, instrumento y disponibilidad de horarios. Para conocer las tarifas actuales y consultar horarios, puedes comunicarte directamente por WhatsApp."
    },
    {
        pregunta: "💳 ¿Cuáles son los métodos y formas de pago?",
        respuesta:
            "Las clases pueden pagarse de dos formas: por cada clase o mediante el pago mensual por adelantado. Puedes realizar el pago por transferencia bancaria o en efectivo, según la modalidad acordada. Para conocer el valor de las clases y los datos de pago, puedes comunicarte directamente por WhatsApp."
    },
    {
        pregunta: "📅 ¿Cómo puedo reservar una clase?",
        respuesta:
            "Para reservar una clase, puedes comunicarte directamente por WhatsApp. Allí podrás consultar la disponibilidad de horarios, conocer el valor de las clases, resolver cualquier otra duda y coordinar el inicio de tu proceso musical. ¡Será un gusto acompañarte en tu aprendizaje! 🎻"
    }
];

function mostrarPreguntasFAQ() {

    chatPreguntas.innerHTML = "";

    preguntasFAQ.forEach((item) => {

        const boton = document.createElement("button");

        boton.className = "chat-pregunta";
        boton.type = "button";
        boton.textContent = item.pregunta;

        boton.addEventListener("click", () => {
            responderPregunta(item);
        });

        chatPreguntas.appendChild(boton);
    });
}

function agregarMensaje(texto, tipo) {

    const mensaje = document.createElement("div");

    mensaje.className = `chat-mensaje ${tipo}`;

    mensaje.innerHTML = `<p>${texto}</p>`;

    chatFaqContenido.insertBefore(
        mensaje,
        chatPreguntas
    );

    chatFaqContenido.scrollTop =
        chatFaqContenido.scrollHeight;
}

function responderPregunta(item) {

    agregarMensaje(item.pregunta, "chat-usuario");

    chatPreguntas.style.display = "none";

    const escribiendo = document.createElement("div");

    escribiendo.className = "chat-escribiendo";
    escribiendo.textContent = "El asistente está escribiendo...";

    chatFaqContenido.insertBefore(
        escribiendo,
        chatPreguntas
    );

    setTimeout(() => {

        escribiendo.remove();

        agregarMensaje(
            item.respuesta,
            "chat-asistente"
        );

        if (
            item.pregunta.includes("¿Cuánto cuestan") ||
            item.pregunta.includes("¿Cómo puedo reservar")
        ) {

            const botonWhatsApp =
                document.createElement("a");

            botonWhatsApp.className =
                "chat-whatsapp";

            botonWhatsApp.href =
                "https://wa.me/TUNUMERODEWHATSAPP";

            botonWhatsApp.target = "_blank";
            botonWhatsApp.rel = "noopener noreferrer";

            botonWhatsApp.textContent =
                "💬 HABLAR POR WHATSAPP";

            chatFaqContenido.insertBefore(
                botonWhatsApp,
                chatPreguntas
            );
        }

        const volver =
            document.createElement("button");

        volver.className =
            "chat-pregunta";

        volver.type = "button";
        volver.textContent =
            "← Ver todas las preguntas";

        volver.addEventListener("click", () => {

            chatPreguntas.style.display =
                "flex";

            volver.remove();

            chatFaqContenido.scrollTop =
                chatFaqContenido.scrollHeight;
        });

        chatFaqContenido.insertBefore(
            volver,
            chatPreguntas
        );

        chatFaqContenido.scrollTop =
            chatFaqContenido.scrollHeight;

    }, 900);
}

chatFaqBoton.addEventListener("click", () => {

    chatFaqVentana.classList.add("abierto");

    chatFaqBoton.style.display = "none";

    chatFaqContenido.scrollTop =
        chatFaqContenido.scrollHeight;
});

chatFaqCerrar.addEventListener("click", () => {

    chatFaqVentana.classList.remove("abierto");

    chatFaqBoton.style.display = "flex";
});

mostrarPreguntasFAQ();