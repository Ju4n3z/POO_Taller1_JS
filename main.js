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

//Cuarto ejercicio

class Vehiculo {
    constructor({marca, modelo, velocidad}) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = parseFloat(velocidad);
    }

    get getVelocidad() {
        return this.velocidad;
    }

    acelerar() {
        this.velocidad += 10;
    }

    velocidadActual() {
        return `<p>La velocidad actual del vehículo es ${this.velocidad} Km/h</p>`;
    }
    
    static convertirKmAMph(velocidad) {
        let millas = parseFloat(velocidad) / 1.609;
        return `<p>La velocidad en millas es ${millas.toFixed(2)} mph</p>`;
    }
}

class Coche extends Vehiculo {
    constructor({marca, modelo, velocidad, combustible}) {
        super({marca, modelo, velocidad});
        this.combustible = combustible;
    }
    acelerar() {
        this.velocidad += 20;
    }
}

let formulario14 = document.getElementById('formulario14');
let formulario24 = document.getElementById('formulario24');

const instanciarVehiculo = (data) => {
    let vehiculo1 = new Vehiculo(data);
    let resultado1 = document.getElementById('resultado14');
    let acelerar1 = document.getElementById('acelerar1');
    resultado1.removeAttribute('style');
    let parrafo1 = document.getElementById('parrafo14');
    parrafo1.innerHTML = '';
    parrafo1.insertAdjacentHTML('beforeend', vehiculo1.velocidadActual());
    parrafo1.insertAdjacentHTML('beforeend', Vehiculo.convertirKmAMph(vehiculo1.getVelocidad));
    let botonVelocidad = document.createElement('button');
    botonVelocidad.setAttribute('id', 'botonVelocidad1');
    botonVelocidad.setAttribute('class', 'btn btn-outline-warning');
    botonVelocidad.setAttribute('type', 'button');
    botonVelocidad.innerText = 'Acelerar';
    acelerar1.appendChild(botonVelocidad);
    botonVelocidad.addEventListener('click', () => {

        parrafo1.innerHTML = '';
        parrafo1.insertAdjacentHTML('beforeend', vehiculo1.velocidadActual(vehiculo1.acelerar()));
        parrafo1.insertAdjacentHTML('beforeend', Vehiculo.convertirKmAMph(vehiculo1.getVelocidad));
    });
}

const instanciarCoche = (data) => {
    let coche1 = new Coche(data);
    let resultado2 = document.getElementById('resultado24');
    let acelerar = document.getElementById('acelerar2');
    resultado2.removeAttribute('style');
    let parrafo2 = document.getElementById('parrafo24');
    parrafo2.innerHTML = '';
    parrafo2.insertAdjacentHTML('beforeend', coche1.velocidadActual());
    parrafo2.insertAdjacentHTML('beforeend', Vehiculo.convertirKmAMph(coche1.getVelocidad));
    let botonVelocidad = document.createElement('button');
    botonVelocidad.setAttribute('id', 'botonVelocidad2');
    botonVelocidad.setAttribute('class', 'btn btn-outline-warning');
    botonVelocidad.setAttribute('type', 'button');
    botonVelocidad.innerText = 'Acelerar';
    acelerar.appendChild(botonVelocidad);
    botonVelocidad.addEventListener('click', () => {
        parrafo2.innerHTML = '';
        parrafo2.insertAdjacentHTML('beforeend', coche1.velocidadActual(coche1.acelerar()));
        parrafo2.insertAdjacentHTML('beforeend', Vehiculo.convertirKmAMph(coche1.getVelocidad));
    });
}

formulario14.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarVehiculo(data);
});

formulario24.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarCoche(data);
});

//Quinto ejercicio

const formatter = new Intl.NumberFormat('en-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })

class Empleado {
    constructor({nombre, edad, sueldo}) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.sueldo = parseFloat(sueldo);
    }

    get getSueldo() {
        return this.sueldo;
    }

    calcularSueldo() {
        return `<p>El sueldo del empleado ${this.nombre} es ${formatter.format(this.sueldo*12)}</p>`;
    }
}

class Gerente extends Empleado {
    constructor({nombre, edad, sueldo, departamento}) {
        super({nombre, edad, sueldo});
        this.departamento = departamento;
    }

    calcularSueldo() {
        return `<p>El sueldo del gerente ${this.nombre} es ${formatter.format(this.sueldo*1.10*12)}</p>`;
    }
}

let formulario15 = document.getElementById('formulario15');
let formulario25 = document.getElementById('formulario25');

const instanciarEmpleado = (data) => {
    let empleado1 = new Empleado(data);
    let resultado1 = document.getElementById('resultado15');
    let parrafo1 = document.getElementById('parrafo15');
    resultado1.removeAttribute('style');
    parrafo1.innerHTML = '';
    parrafo1.insertAdjacentHTML('beforeend', empleado1.calcularSueldo());
}

const instanciarGerente = (data) => {
    let gerente1 = new Gerente(data);
    let resultado2 = document.getElementById('resultado25');
    let parrafo2 = document.getElementById('parrafo25');
    resultado2.removeAttribute('style');
    parrafo2.innerHTML = '';
    parrafo2.insertAdjacentHTML('beforeend', gerente1.calcularSueldo());
}

formulario15.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarEmpleado(data);
});

formulario25.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    instanciarGerente(data);
});