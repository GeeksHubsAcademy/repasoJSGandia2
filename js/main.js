
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

let vida = -5;


// while(vida >= 0){

//     vida -= 5;
//     console.log(vida);

//     if(vida == 0){
//         break;
//     }

// }

do {

    vida -= 5;
    console.log(vida);

    if(vida == 0){
        break;
    }

} while (vida >= 0);