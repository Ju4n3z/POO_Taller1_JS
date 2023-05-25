//Primer ejercicio

class Persona {
    constructor({nombre, edad, sexo}) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        let parrafo = `<p>Hola, mi nombre es ${this.nombre}</p>`
        return parrafo;
    }

    get getNombre() {
        return this.nombre;
    }

    get getEdad() {
        return this.edad;
    }

    static esMayordeEdad(edad, nombre) {
        if (edad >= 18) {
            return `<p> ${nombre} es mayor de edad </p>`;
        } else {
            return `<p> ${nombre} es menor de edad </p>`;
        }
    }
}

class Estudiante extends Persona {
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
    let resultado1 = document.getElementById('resultado11');
    resultado1.removeAttribute('style');
    let parrafo1 = document.getElementById('parrafo11');
    parrafo1.innerHTML = '';
    parrafo1.insertAdjacentHTML('beforeend', persona1.saludar());
    parrafo1.insertAdjacentHTML('beforeend', Persona.esMayordeEdad(persona1.getEdad, persona1.getNombre));
}

const instanciarEstudiante = (data) => {
    let estudiante1 = new Estudiante(data);
    let resultado2 = document.getElementById('resultado21');
    resultado2.removeAttribute('style');
    let parrafo2 = document.getElementById('parrafo21');
    parrafo2.innerHTML = '';
    parrafo2.insertAdjacentHTML('beforeend', estudiante1.saludar());
    parrafo2.insertAdjacentHTML('beforeend', estudiante1.estudiar());
}

let formulario11 = document.getElementById('formulario11');
let formulario21 = document.getElementById('formulario21');

formulario11.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarPersona(data);
})

formulario21.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarEstudiante(data);
});

//Segundo ejercicio

class Animal {
    constructor({nombre, edad, sonido}) {
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }
    hacerSonido() {
        return `<p>${this.sonido}</p>`;
    }
}

class Perro extends Animal {
    constructor({nombre, edad, sonido, raza}) {
        super({nombre, edad, sonido});
        this.raza = raza;
    }
    moverCola() {
        return `<p>El perro está moviendo la cola</p>`;
    }
};

let formulario12 = document.getElementById('formulario12');
let formulario22 = document.getElementById('formulario22');

const instanciarAnimal = (data) => {
    let animal1 = new Animal(data);
    let resultado1 = document.getElementById('resultado12');
    resultado1.removeAttribute('style');
    let parrafo1 = document.getElementById('parrafo12');
    parrafo1.innerHTML = '';
    parrafo1.insertAdjacentHTML('beforeend', animal1.hacerSonido());
};

const instanciarPerro = (data) => {
    let perro1 = new Perro(data);
    let resultado2 = document.getElementById('resultado22');
    resultado2.removeAttribute('style');
    let parrafo2 = document.getElementById('parrafo22');
    parrafo2.innerHTML = '';
    parrafo2.insertAdjacentHTML('beforeend', perro1.hacerSonido());
    parrafo2.insertAdjacentHTML('beforeend', perro1.moverCola());
};

formulario12.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarAnimal(data);
});

formulario22.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarPerro(data);
});

//Tercer ejercicio

class Figura {
    constructor({nombre, area = 0}) {
        this.nombre = nombre;
        this.area = area;
    }
    calcularArea() {
        return `<p>El área de la figura es ${this.area}</p>`;
    }
}

class Circulo extends Figura {
    constructor({nombre, radio}) {
        super({nombre});
        this.radio = radio;
    }
    calcularArea() {
        return `<p>El área del círculo es ${(Math.PI * this.radio * this.radio).toFixed(2)}</p>`;
    }
}

class Rectangulo extends Figura {
    constructor({nombre, largo, ancho}) {
        super({nombre});
        this.largo = parseFloat(largo);
        this.ancho = parseFloat(ancho);
    }
    calcularArea() {
        return `<p>El área del cuadrado es ${(this.largo * this.ancho).toFixed(2)}</p>`;
    }
}

let formulario13 = document.getElementById('formulario13');
let formulario23 = document.getElementById('formulario23');
let formulario33 = document.getElementById('formulario33');

const instanciarFigura = (data) => {
    let figura1 = new Figura(data);
    let resultado1 = document.getElementById('resultado13');
    resultado1.removeAttribute('style');
    let parrafo1 = document.getElementById('parrafo13');
    parrafo1.innerHTML = '';
    parrafo1.insertAdjacentHTML('beforeend', figura1.calcularArea());
}

const instanciarCirculo = (data) => {
    let circulo1 = new Circulo(data);
    let resultado2 = document.getElementById('resultado23');
    resultado2.removeAttribute('style');
    let parrafo2 = document.getElementById('parrafo23');
    parrafo2.innerHTML = '';
    parrafo2.insertAdjacentHTML('beforeend', circulo1.calcularArea());
}

const instanciarRectangulo = (data) => {
    let rectangulo1 = new Rectangulo(data);
    let resultado3 = document.getElementById('resultado33');
    resultado3.removeAttribute('style');
    let parrafo3 = document.getElementById('parrafo33');
    parrafo3.innerHTML = '';
    parrafo3.insertAdjacentHTML('beforeend', rectangulo1.calcularArea());
}

formulario13.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarFigura(data);
});

formulario23.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarCirculo(data);
});

formulario33.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarRectangulo(data);
});
