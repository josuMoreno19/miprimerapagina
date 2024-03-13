//alert("Hola este es mi javascript, bienvenidos a mi pagina web");
//console.log("Hola Mundo");

//let nombre = "Josué";
//nombre = "Sebastián";
//console.log(nombre);

//const nombre1 = "Yeny";
//console.log(nombre1);

//var nombre2 = "David";
//nombre2 = "Sergio";
//console.log(nombre2);

let titulo = document.querySelector("#seccion-principal #seccion-1 #acerca-de h2");
let texto= titulo.innerText;
console.log(texto);
if(texto == "otro"){
    titulo.innerHTML = "Hola";
}
else{
    console.log("No funciona el query");
}