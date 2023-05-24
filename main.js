class Persona {
    /**
     * @param {Este parametro indica el nombre de la persona} nombre 
     * @param {Este parametro indica la edad de la persona} edad 
     * @param {Este parametro indica el sexo de la persona} sexo 
     */
    constructor({nombre, edad, sexo}) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    /**
     ** Este metodo imprime en consola un saludo con el nombre de la persona
     */
    saludar() {
        let parrafo = `<p>Hola, mi nombre es ${this.nombre}</p>`
        return parrafo;
    }

    static esMayordeEdad(nombre, edad) {
        if (edad >= 18) {
            return `<p> ${nombre} es mayor de edad </p>`;
        } else {
            return `<p> ${nombre} es menor de edad </p>`;
        }
    }
}

class Estudiante extends Persona {
    /**
     * @param {Este parametro indica el nombre de la persona} nombre 
     * @param {Este parametro indica la edad de la persona} edad 
     * @param {Este parametro indica el sexo de la persona} sexo 
     * @param {Este parametro indica la carrera de la persona} carrera 
     */
    constructor({nombre, edad, sexo, carrera}) {
        super({nombre, edad, sexo});
        this.carrera = carrera;
    }

    estudiar() {
        let parrafo = `<p>Estoy estudiando ${this.carrera}</p>`;
        return parrafo;
    }
}

const instanciarPersona = (data) => {
    let persona1 = new Persona(data);
    let resultado1 = document.getElementById('resultado1');
    resultado1.removeAttribute('style');
    let parrafo1 = document.getElementById('parrafo1');
    parrafo1.innerHTML = '';
    parrafo1.insertAdjacentHTML('beforeend', persona1.saludar());
    parrafo1.insertAdjacentHTML('beforeend', Persona.esMayordeEdad(data.nombre, data.edad));
}

const instanciarEstudiante = (data) => {
    let estudiante1 = new Estudiante(data);
    let resultado2 = document.getElementById('resultado2');
    resultado2.removeAttribute('style');
    let parrafo2 = document.getElementById('parrafo2');
    parrafo2.innerHTML = '';
    parrafo2.insertAdjacentHTML('beforeend', estudiante1.saludar());
    parrafo2.insertAdjacentHTML('beforeend', estudiante1.estudiar());
}

let formulario1 = document.getElementById('formulario1');
let formulario2 = document.getElementById('formulario2');

/**
 * @param {Este evento se encarga de prevenir el comportamiento por defecto del formulario y de obtener los datos del mismo} e
 */

formulario1.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarPersona(data);
})

formulario2.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarEstudiante(data);
});
