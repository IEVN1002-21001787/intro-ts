//interfaz clase pequeña que hereda propiedades y metodos 
interface Alumno{
    nombre: string;
    apellido: string;
    edad: number;
    curso: string;
    direccion?: string;
}

const alumno:Alumno={
    nombre: "juan",
    apellido: "lopez",
    edad: 22,
    curso: "ingles",
   
}

console.table(alumno)

let mascotas=['perro','gato','perico'];

console.log(mascotas[0])
mascotas[1]='nuevo gato';
mascotas.push('hamster')
console.log(mascotas)

let  tem:(number|string)[]=[] //se define el tipo del arreglo y y es un arreglo vacio
tem.push(1);
tem.push('dos');
console.log(tem)