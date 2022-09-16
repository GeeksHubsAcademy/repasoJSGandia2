
// function Sumar (numero1, numero2) {

//     return numero1 + numero2;
// };

// let numero1 = parseInt(prompt("Introduce un número"));
// let numero2 = parseInt(prompt("Introduce otro número"));

// console.log(Sumar(numero1,numero2));

// let numeroFavorito = 3;

// numeroFavorito = 6;

// numeroFavorito += 5;
// numeroFavorito -= 3;

// numeroFavorito **= 2;

// console.log(numeroFavorito);

// let pelicula = "Matrix";

// if(pelicula == "Blade Runner"){

//     console.log("Es la pelicula favorita de Christian");

// }else{

//     console.log("No es la pelicula favorita de Christian");
// };

// let numeroPaula = 22;

// if(numeroPaula === "22"){
//     console.log("Soy el mismo");
// }else {
//     console.log("No soy el mismo");
// }

// let operacion = prompt("Dime que operacion quieres realizar").toLowerCase();

// let numero1 = parseInt(prompt("Dime el primer número"));

// let numero2 = parseInt(prompt("Dime el segundo número"));

// function Operar(operacion, numero1, numero2){

//     //Analizo el tipo de operación que se va a realizar

//     if(operacion == "Sumar"){

//         return numero1 + numero2;

//     } else if (operacion == "Restar"){

//         return numero1 - numero2;

//     } else if (operacion == "Multiplicar"){

//         return numero1 * numero2;

//     } else if (operacion == "Dividir"){
//         return numero1 / numero2;
//     }
// }

// switch(operacion){

//     case 'sumar': 
//         console.log(numero1 + numero2);
//     break;

//     case 'restar': 
//         console.log(numero1 - numero2);
//     break;

//     case 'multiplicar': 
//         console.log(numero1 * numero2);
//     break;

//     case 'dividir': 
//         console.log(numero1 / numero2);
//     break;

//     default:
//         console.log("No sabes escribir");

//     break;


// }

// let aguacate = false;

// if(!aguacate){
//     console.log("Nos arruinamos");
// }else{
//     console.log("Comemos patata");
// }

// let edad = 20;

// let estado = "Florida";

// if(edad >= 21){

//     if(estado == "Florida"){

//         console.log("Enhorabuena, puedes probar el horrible sabor de Cruzcampo");
//     };
// };

// if((edad >= 21) && (estado == "Florida")){
//     console.log("Bebe cerveza con los caimanes");
// }

// let dia = "viernes";

// if(dia == "sabado" || dia == "domingo"){
//     console.log("podreis dormir un poquito más");
// }

// let tiempoLibre = false;

// if(!tiempoLibre){
//     console.log("urbalaaaaaaaaaaaaaaaaaaab nooooooooooooo");
// }

// let coche = "Mazda";

// if(coche != "Mercedes"){
//     console.log("Enhorabuena, eres original");
// }


// let nota = parseInt(prompt("Dime que nota has sacado"));

// if(nota >= 0 && nota <= 4){
//     console.log("insuficiente");
// } else if (nota >= 5 && nota <= 6){
//     console.log("suficiente");
// } else if (nota >= 7 && nota <= 8){
//     console.log("notable");
// } else if (nota >= 9 && nota <= 10){
//     console.log("excelente");
// };

// switch (nota) {

//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("Insuficiente");
//     break;

//     case 5:
//     case 6:
//         console.log("Suficiente");
//     break;

//     case 7:
//     case 8:
//         console.log("Notable");
//     break;

//     case 9:
//     case 10:
//         console.log("Excelente");
//     break;

//     default:
//         console.log("No se que has puesto, pero estás suspendido");
//     break;
// }


// let edad = 17;

// let pelicula = "Jaws";

// if(edad < 18){
//     console.log("No puedes ver Jaws");
// }else{
//     console.log("Si puedes ver Jaws");
// };

//Mientras tanto, en el mundo de las ternarias.....

// let edad = 17;

// let verPelicula = edad < 18 ? "No puedes ver Jaws" : "Si puedes ver Jaws"

// console.log(verPelicula);



// for(let i = 1; i <= 100; i++){

//     console.log("Hola David, eres un genio");
// }

// let vida = -5;


// while(vida >= 0){

//     vida -= 5;
//     console.log(vida);

//     if(vida == 0){
//         break;
//     }

// }

// do {

//     vida -= 5;
//     console.log(vida);

//     if(vida == 0){
//         break;
//     }

// } while (vida >= 0);

// let numero = parseInt(prompt("Querido usuario, digame un número del 1 al 9"));

// let contador = 1;

// while(contador <= 10){

//     console.log(numero, " X ", contador, " = ", numero*contador);

//     contador++;

// };

// for(let i = 1; i <= 10; i++){

//     console.log(numero, " X ", i, " = ", numero*i);
// };

// let loteria = prompt("Dime el numero que va a salir en la loteria para no tener que ir al bootcamp");

// function Modifica(numero){
//     return numero + 2;
// }

// //Cuando tu ejecutas la funcion, no es estrictamente necesario que los parámetros se llamen igual
// //que cuando has declarado la función.
// Modifica(loteria);


//En este caso tenemos una función anónima, alojada dentro de una variable, para ejecutar
//la funcion, lo hacemos llamando a la variable.
// let variableConUnaFuncionDentro = function(parametro){ return parametro ** 2};

// variableConUnaFuncionDentro(5)

/*

Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
por teclado (recuerda pasar de String a double con parseDouble). Usa la
constante PI.

*/

// function Circulo(PI, radio){
//     let resultado = PI * ( radio ** 2);
//     return resultado;
// }

// const PI = 3.14;

// let radio = parseInt(prompt("Dime el radio"));

// let mostrar = Circulo(PI, radio);

// console.log(mostrar);


//ARRAYS

// let hobbiesPedro = ["comer","gimnasio","dormir","lol"];

// let hobbiesIuri = [30,"guitarra","cocinar",1992];

// let hobbiesRocio = ["Leer","Patinar","Gandia"];

// let coleccionHobbies = [hobbiesPedro,hobbiesIuri,hobbiesRocio];

// console.log(coleccionHobbies[2][2])

// let numeros = [];

// let contar = parseInt(prompt("Dime un numero"));

// for(let i = 1; i <= contar; i++){
//     numeros.push(i);
// }

// console.log(numeros);





// let contadorEdad = [];

// let edad = parseInt(prompt("Dime tu edad"));

// for(let i = edad; i >= 1; i--){

//     if(i % 2 != 0){

//         contadorEdad.push(i)
//     }
// };

// console.log(contadorEdad.length);


// let alumnosGandia = ["David","Paula","Adrià","Pedro","Israel"];

// for (let i = 0; i < alumnosGandia.length; i++){
    
//     alumnosGandia[i] += " - Programad@r";
    
// }

// console.log(alumnosGandia);

// let frutas = ["Pera","Kiwi","Sandia"];

// let verduras = ["Tomate","Alcachofa","Pimiento"];

// let comida = frutas.concat(verduras);

// console.log(comida);

// let fruteria = frutas.join("*");

// console.log(fruteria);

// let bebidas = ["whiskey","ginebra","cafe","batido","ron","brandy","tenis","agua","leche","cocaCola","sprite","jagger","rekia"];

// let nuevoArray = bebidas.splice(2,5).sort();

// console.log(nuevoArray);

//KATA EJERCICIO DNI

// let letra = prompt("Dime una letra");

// let numero = parseInt(prompt("Dime el número de DNI"));

// let resto = numero % 23;

// let array = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];

// if(letra == array[resto]){
//     console.log("El dni es correcto");
// }else{
//     console.log("El dni es incorrecto");
// }


//OBJETOS DE JAVASCRIPT

// let pedro = {
//     edad: 26,
//     nacionalidad: "Guinea Ecuatorial",
//     altura: "1.73",
//     hobbies: {
//         hobbie1: "Dibujar",
//         hobbie2: "Musica",
//         hobbie3: "Cocinar"
//     }
// };

// pedro.hobbies.hobbie2 = "Bailar";
// console.log(pedro);

// let edad = parseInt(prompt("Dime tu edad"));

// // 

// let pelicula1 = {
//     nombre: "Soy Leyenda",
//     edad: 13
// }

// let pelicula2 = {
//     nombre: "Rey leon",
//     edad: 3
// }

// let pelicula3 = {
//     nombre: "Demonio",
//     edad: 18
// }

// let pelicula4 = {
//     nombre: "A todo gas",
//     edad: 8
// }

// let peliculas = [pelicula1,pelicula2,pelicula3,pelicula4];

// for(let i = 0; i < peliculas.length; i++){

//     if(peliculas[i].edad <= edad){
//         console.log("Puedes ver ",peliculas[i].nombre);
//     }
// };


// let a = 15;
// let b = a;

// a += 2;

// console.log(a);
// console.log(b);

// let arrayA = ["coca cola","ron","ginebra"];
// let arrayB = arrayA;

// arrayA.push("cerveza");

// console.log(arrayA);
// console.log(arrayB);


let miObjeto = {

    edad: 0,
    altura: "",
    peso: 0

}

let edad = prompt("dime tu edad")

miObjeto.edad = edad;