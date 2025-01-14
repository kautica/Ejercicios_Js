//Declara una variable
let numero = 5;
//Variable para almacenar el factorial
let factorial = 1;
//Usa un bucle for para calcular el factorial
for (let i= 1; i <= numero; i++){
    factorial *=i;
}
//imprime el resultado en consola
console.log("el factorial de ", numero, "es.", factorial);