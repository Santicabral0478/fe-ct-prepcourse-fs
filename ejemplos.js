// function Perro(nombre, patas, años){
//     this._nombre = nombre;
//     this._patas = patas;
//     this._años = años;
// }

// Perro.prototype.saludo = function(){
//     return `Hola!, soy un Perro, Me llamo ${this._nombre}, tengo ${this._patas} patas, y soy ${this._años} añitos mayor` 
// }

// var perro1 = new Perro("El bryan", 2, 103);
// var perro2 = new Perro("Carlitos", 4, 44);

// console.log(perro1.saludo());
// console.log(perro2.saludo());

///-----------____--_-__--__________--_-____  CALL-BACKS--->>

// var devuelvoUsuario = function(){
//     return 'Camilo'
// }

// var devuelvoSaludo = function(){
//     return 'Hola'
// }

// var saludar = function(cb1, cb2){
//     return `${cb1()} ${cb2()}`
// }
 
// var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
// console.log(resultado);

// ///-----------____--_-__--__________--_-____  CALL-BACKS-EJEMPLO2--->>

//     var fraseMental = function(comida){
//         return `Hoy comere ${comida}`; 
//     }
    
//     var fraseHablada = function(comida, funcionMental){
//         return funcionMental(comida);
//     }

//     var accionHablar = fraseHablada("pizza", fraseMental);
//     console.log(accionHablar);

var string = "jsdbfkbj"
var arrayString = string.split(""); 
var objetoString = {};
for(var i = 0; i<arrayString.length; i++){
   if(arrayString[i])
} 


var claves = Object.keys(objetoString);
claves.sort();
var objetoOrdenado = {};
for(i = 0; i<claves.length; i++){
    var clave = claves[i];
    objetoOrdenado[clave] = objetoString[clave];
}
return objetoOrdenado;