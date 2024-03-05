
//resta acumulativa de los numeros en el arreglo
let numeros = [3, 7, 12, 5, 8];

let restaAcumulativa = numeros.reduce((acum, valorActual) => {
    return acum - valorActual;
});

console.log("La resta acumulativa de todos los numeros es: ", restaAcumulativa);

//se filtran los numeros mayores que 5
let mayoresA5 = numeros.filter(dato => {
    return dato > 5;
});

console.log("Los numeros mayores a 5 son:", mayor);


//añade el prefijo "pais" a cada string
let strings = ["Medellin", "Risaraldas", "Colombia", "Colorado", "Noruega"];

let stringsConPrefijo = strings.map(pais => {
    return "País: " + pais;
});

console.log("Prefijos:", stringsConPrefijo);

//mostrar la longitud de cada string
strings.forEach(str => {
    console.log("La longitud del string:", str.length);
});
