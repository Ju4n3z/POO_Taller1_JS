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
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
    }