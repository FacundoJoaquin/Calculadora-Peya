//DOM DE PROBLEMAS.HTML

const problema = document.querySelector("div#divProblems")
const h2problemas = document.querySelector("h2.h2-problemas")
const regex = /^[a-zA-Z]+$/;
const sectionProblemas = document.querySelector("section.section-problems")
const formProblema = document.querySelector("form#formProblemas")
    formProblema.addEventListener("submit", (e)=> {
        e.preventDefault();
        let nombre = document.querySelector("input.input-nombre").value;
        if (regex.test(nombre)) {
            localStorage.setItem("nombre", nombre);
            formProblema.classList.add("ocultar");
            clickeame.classList.replace("ocultar", "clickeame");
        } else {
            alertaNombre()
            return
        }

    })

let indexDiv = 1;
const nextProblem = document.querySelector("button#next-problem")
nextProblem.addEventListener("click", (e)=>{
    const p1 = document.querySelector("div#p1");
    const p2 = document.querySelector("div#p2");
    const p3 = document.querySelector("div#p3");
    if (indexDiv === 1) {
        p1.classList.add("ocultar");
        p2.classList.add("scale-up-center")
        p2.classList.remove("ocultar");
        indexDiv = 2;
    } else if (indexDiv === 2) {
        p2.classList.add("ocultar");
        p3.classList.add("scale-up-center")
        p3.classList.remove("ocultar");
        indexDiv = 3;
        h2problemas.classList.add("ocultar")
        nextProblem.classList.remove("next-problem");
        nextProblem.innerHTML = `<a href="explicacion.html"><button id="next-problem" class= "next-page"><p>Continuar</p></button></a>`;
    } else if (indexDiv === 3) {
        p3.classList.add("ocultar");
    }
})

const inputNombre = document.querySelector("input.input-nombre")
const descripcionProblema = document.querySelector("div.descripcionProblema")




    const clickeame = document.querySelector("div#clickeame")
    clickeame.addEventListener("click", (e)=> {
        renderizarProblema()
        clickeame.classList.add("bye")
                sectionProblemas.classList.remove("ocultar")

    })
    
    function renderizarProblema(){
        let usuario = localStorage.getItem("nombre")
        descripcionProblema.innerHTML = retornoProblema(usuario);
        formProblema.classList.add("ocultar");
    }
