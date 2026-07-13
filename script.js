document.addEventListener("DOMContentLoaded", () => {

    //==========================
    // ELEMENTOS
    //==========================

    const hero = document.getElementById("hero");
    const giftStage = document.getElementById("giftStage");
    const envelopesSection = document.getElementById("envelopesSection");
    const envelopesGrid = document.getElementById("envelopesGrid");

    const openGiftBtn = document.getElementById("openGiftBtn");
    const giftBox = document.getElementById("giftBox");

    const modal = document.getElementById("reasonModal");
    const reasonTitle = document.getElementById("reasonTitle");
    const reasonText = document.getElementById("reasonText");

    const closeModal = document.getElementById("closeModal");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const nextReasonBtn = document.getElementById("nextReasonBtn");

    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");

    const finalLetter = document.getElementById("finalLetter");

    //==========================
    // DATOS
    //==========================

    let abiertos =
        JSON.parse(localStorage.getItem("sobresAle")) || [];

const razones = [

"Porque desde que llegaste, mi vida cambió para siempre.",
"Porque tu sonrisa siempre logra alegrar mi día.",
"Porque me encanta escucharte hablar, aunque sea de cosas sencillas.",
"Porque eres una mujer increíble.",
"Porque me haces querer ser una mejor persona.",
"Porque pienso en ti incluso cuando intento no hacerlo.",
"Porque contigo aprendí que el amor está en los pequeños detalles.",
"Porque me encanta llamarte mi gatita.",
"Porque tu felicidad también es importante para mí.",
"Porque cada conversación contigo vale la pena.",
"Porque tienes una forma única de hacerme sonreír.",
"Porque me inspiras a luchar por lo que quiero.",
"Porque eres fuerte, incluso cuando no lo crees.",
"Porque contigo hasta los silencios se sienten bonitos.",
"Porque tu voz tiene el poder de tranquilizarme.",
"Porque eres la primera persona en la que pienso al despertar.",
"Porque me encanta saber cómo estuvo tu día.",
"Porque disfruto cada momento que compartimos.",
"Porque contigo quiero seguir creando recuerdos.",
"Porque admiro la mujer que eres.",
"Porque me haces creer que el amor verdadero sí existe.",
"Porque siempre encuentro una razón para sentirme afortunado de conocerte.",
"Porque me encanta verte feliz.",
"Porque haces que los días difíciles sean más fáciles.",
"Porque simplemente eres tú, y eso es suficiente.",
"Porque contigo aprendí que los pequeños momentos son los que más se recuerdan.",
"Porque contigo aprendí que los pequeños momentos son los que más se recuerdan.",
"Porque me encanta cuando me escribes.",
"Porque tu nombre siempre logra sacarme una sonrisa.",
"Porque eres una mujer con un corazón enorme.",
"Porque me haces sentir afortunado de haberte conocido.",
"Porque siempre encuentro una nueva razón para admirarte.",
"Porque me gusta imaginar un futuro contigo.",
"Porque contigo puedo ser yo mismo.",
"Porque me encanta hacerte sonreír.",
"Porque eres una de las personas más importantes en mi vida.",
"Porque me inspiras a no rendirme.",
"Porque me gusta cuidarte y protegerte.",
"Porque cada día descubro algo nuevo que me enamora de ti.",
"Porque tu forma de ser te hace única.",
"Porque haces que los días normales se vuelvan especiales.",
"Porque eres mi pensamiento favorito.",
"Porque disfruto imaginar todos los momentos que aún nos faltan por vivir.",
"Porque me gusta celebrar tus logros como si fueran míos.",
"Porque me haces creer que las mejores historias de amor existen.",
"Porque cuando estoy contigo el tiempo pasa demasiado rápido.",
"Porque tu presencia llena de tranquilidad mi corazón.",
"Porque me encanta cuando compartimos nuestras ocurrencias y reímos juntos.",
"Porque siempre encuentro paz al hablar contigo.",
"Porque eres una mujer admirable en muchos aspectos.",
"Porque cada día que pasa tengo una razón más para seguir eligiéndote.",
"Porque me haces sentir que el amor vale la pena.",
"Porque me encanta la persona en la que me convierto cuando estoy contigo.",
"Porque eres capaz de alegrarme incluso sin darte cuenta.",
"Porque cada recuerdo contigo tiene un lugar especial en mi corazón.",
"Porque contigo aprendí que amar también significa tener paciencia.",
"Porque me gusta escuchar tus sueños y tus metas.",
"Porque siempre quiero saber cómo estás.",
"Porque me encanta cuando compartimos nuestras conversaciones.",
"Porque tu sonrisa tiene el poder de cambiar mi día.",
"Porque eres una mujer con un corazón hermoso.",
"Porque cada día me das una razón más para seguir adelante.",
"Porque me gusta imaginar todos los lugares que podríamos conocer juntos.",
"Porque eres mi casualidad favorita.",
"Porque me haces sentir en paz.",
"Porque me encanta cuando puedo sacarte una sonrisa.",
"Porque eres una persona auténtica y eso te hace aún más especial.",
"Porque me inspiras a luchar por lo que quiero.",
"Porque nunca dejas de sorprenderme.",
"Porque contigo entendí que el amor también se demuestra con pequeños detalles.",
"Porque siempre ocupas un lugar muy importante en mis pensamientos.",
"Porque me encanta cuando compartimos un momento, por pequeño que sea.",
"Porque eres la mujer que mi corazón eligió.",
"Porque me haces creer que las mejores historias aún están por escribirse.",
"Porque no necesito una fecha especial para recordarte cuánto significas para mí.",
"Porque cada día descubro una nueva razón para amarte.",
"Porque eres la persona que mi corazón sigue eligiendo cada día.",
"Porque contigo aprendí que el amor también se demuestra con paciencia.",
"Porque nunca dejaré de admirar la mujer que eres.",
"Porque me haces creer que siempre vale la pena luchar por quien se ama.",
"Porque eres parte de mis mejores pensamientos.",
"Porque cada recuerdo contigo tiene un lugar especial en mi corazón.",
"Porque me gusta imaginar todos los momentos que aún nos faltan por vivir.",
"Porque contigo quiero celebrar cada logro y superar cada dificultad.",
"Porque haces que mi mundo sea un lugar mejor.",
"Porque siempre encuentro paz cuando pienso en ti.",
"Porque eres la razón de muchas de mis sonrisas.",
"Porque me encanta la forma en que haces especial cualquier momento.",
"Porque contigo aprendí que el verdadero amor se construye día a día.",
"Porque nunca dejaré de creer en nosotros.",
"Porque cada día descubro una nueva razón para amarte.",
"Porque tu felicidad siempre será una de mis prioridades.",
"Porque me haces querer ser el mejor hombre que pueda ser.",
"Porque contigo los sueños parecen más posibles.",
"Porque eres mi lugar favorito, incluso cuando estamos lejos.",
"Porque gracias a ti aprendí a valorar mucho más el amor.",
"Porque mi corazón encontró en ti a alguien verdaderamente especial.",
"Porque quiero seguir escribiendo nuestra historia, un día a la vez.",
"Porque después de estas 99 razones, todavía me quedan miles más.",
"Porque no existe un solo día en el que deje de elegirte.",
"Porque simplemente te amo, mi gordita, y esa siempre será la razón más importante."
];

    //==========================
    // PORTADA
    //==========================

    openGiftBtn.onclick = () => {

        hero.classList.add("is-hidden");

        giftStage.classList.remove("is-hidden");

    };

    //==========================
    // CAJA
    //==========================

    giftBox.onclick = () => {

        giftStage.classList.add("is-hidden");

        envelopesSection.classList.remove("is-hidden");

        crearSobres();

    };
//==========================
// CREAR SOBRES
//==========================

function crearSobres() {

    envelopesGrid.innerHTML = "";

    for(let i = 0; i < 100; i++){

        const sobre = document.createElement("div");

        sobre.className = "envelope";

        if(abiertos.includes(i)){
            sobre.classList.add("opened");
        }

        sobre.innerHTML = `
            <div class="envelope-icon">💌</div>
            <div class="envelope-number">${i+1}</div>
        `;

        sobre.onclick = () => {

            reasonTitle.textContent =
                "💌 Sobre #" + (i+1);

            reasonText.textContent =
                razones[i];

            modal.classList.remove("is-hidden");

            if(!abiertos.includes(i)){

                abiertos.push(i);

                localStorage.setItem(
                    "sobresAle",
                    JSON.stringify(abiertos)
                );

                sobre.classList.add("opened");

                actualizarBarra();

            }

        };

        envelopesGrid.appendChild(sobre);

    }

    actualizarBarra();

}
//==========================
// ACTUALIZAR BARRA
//==========================

function actualizarBarra(){

    const total = abiertos.length;

    const porcentaje = (total / 100) * 100;

    progressFill.style.width = porcentaje + "%";

    progressText.textContent =
        total + " / 100 abiertos";

    if(total >= 100){

        envelopesSection.classList.add("is-hidden");

        finalLetter.classList.remove("is-hidden");

    }

}

//==========================
// CERRAR MODAL
//==========================

function cerrarModal(){

    modal.classList.add("is-hidden");

}

modalCloseBtn.onclick = cerrarModal;

closeModal.onclick = cerrarModal;

nextReasonBtn.onclick = cerrarModal;


//==========================
// INICIAR BARRA
//==========================

actualizarBarra();

});