// Crear un array de frutas
let frutas = ['manzana', 'banana', 'cereza', 'durazno', 'mango'];
console.log("Array original de frutas:");
console.log(frutas);

// forEach: Ejecuta una función para cada elemento del array
console.log("Salida de forEach:");
frutas.forEach(function(fruta) {
    console.log(fruta);
});

// map: Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
let frutasEnMayusculas = frutas.map(function(fruta) {
    return fruta.toUpperCase();
});
console.log("Salida de map: (frutasEnMayusculas)");
console.log(frutasEnMayusculas);

// filter: Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
let frutasConA = frutas.filter(function(fruta) {
    return fruta.includes('a');
});
console.log("Salida de filter (frutasConA):");
console.log(frutasConA);

// reduce: Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor
let longitudTotal = frutas.reduce(function(acumulador, fruta) {
    return acumulador + fruta.length;
}, 0);
console.log("Salida de reduce:(longitudTotal)");
console.log(longitudTotal);

// some: Comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada
let hayFrutasConZ = frutas.some(function(fruta) {
    return fruta.includes('z');
});
console.log("Salida de some: (hayFrutasConZ)");
console.log(hayFrutasConZ);

// every: Comprueba si todos los elementos del array cumplen con la condición implementada por la función proporcionada
let todasLasFrutasTienenA = frutas.every(function(fruta) {
    return fruta.includes('a');
});
console.log("Salida de every: (todasLasFrutasTienenA)");
console.log(todasLasFrutasTienenA);

// find: Devuelve el primer elemento del array que cumpla con la condición implementada por la función proporcionada
let frutaConD = frutas.find(function(fruta) {
    return fruta.includes('d');
});
console.log("Salida de find: (frutaConD)");
console.log(frutaConD);

// findIndex: Devuelve el índice del primer elemento del array que cumpla con la condición implementada por la función proporcionada
let indiceFrutaConC = frutas.findIndex(function(fruta) {
    return fruta.includes('c');
});
console.log("Salida de findIndex: (indiceFrutaConC)");
console.log(indiceFrutaConC);

// includes: Determina si un array incluye un determinado elemento, devuelve true o false según corresponda
let incluyeMango = frutas.includes('mango');
console.log("Salida de includes: (incluyeMango)");
console.log(incluyeMango);

// sort: Ordena los elementos de un array localmente y devuelve el array ordenado
let frutasOrdenadas = frutas.sort();
console.log("Salida de sort: (frutasOrdenadas)");
console.log(frutasOrdenadas);

// concat: Se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
let masFrutas = frutas.concat(['kiwi', 'piña']);
console.log("Salida de concat: (masFrutas)");
console.log(masFrutas);

// slice: Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
let algunasFrutas = frutas.slice(1, 3);
console.log("Salida de slice: (algunasFrutas)");
console.log(algunasFrutas);

// splice: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
frutas.splice(2, 1, 'fresa');
console.log("Salida de splice:");
console.log(frutas);

// at: Devuelve el elemento en la posición dada
let frutaEnPosicion2 = frutas.at(2);
console.log("Salida de at: (frutaEnPosicion2)");
console.log(frutaEnPosicion2);

// constructor: Devuelve la función que creó el prototipo del objeto Array
let constructorArray = frutas.constructor;
console.log("Salida de constructor:");
console.log(constructorArray);

// copyWithin: Copia una parte del array a otra ubicación en el mismo array y lo devuelve, sin modificar su longitud
frutas.copyWithin(1, 3, 4);
console.log("Salida de copyWithin:");
console.log(frutas);

// entries: Devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice en el array
let iterador = frutas.entries();
console.log("Salida de entries:");
for (let entrada of iterador) {
    console.log(entrada);
}

// fill: Cambia todos los elementos en un arreglo por un valor estático
frutas.fill('kiwi', 1, 3);
console.log("Salida de fill:");
console.log(frutas);

// findLast: Devuelve el último elemento del array que cumpla con la condición implementada por la función proporcionada
let frutaConI = frutas.findLast(function(fruta) {
    return fruta.includes('i');
});
console.log("Salida de findLast: (frutaConI)");
console.log(frutaConI);

// findLastIndex: Devuelve el índice del último elemento del array que cumpla con la condición implementada por la función proporcionada
let indiceFrutaConI = frutas.findLastIndex(function(fruta) {
    return fruta.includes('i');
});
console.log("Salida de findLastIndex: (indiceFrutaConI)");
console.log(indiceFrutaConI);

// flat: Aplana un array de arrays en un solo nivel
let arrayAnidado = [1, 2, [3, 4, [5, 6]]];
let arrayPlano = arrayAnidado.flat(2);
console.log("Salida de flat:");
console.log(arrayPlano);

// flatMap: Primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array
let frutasMapeadas = frutas.flatMap(fruta => [fruta, fruta.length]);
console.log("Salida de flatMap:");
console.log(frutasMapeadas);

// indexOf: Devuelve el primer índice en el que se puede encontrar un elemento dado en el array
let indiceBanana = frutas.indexOf('banana');
console.log("Salida de indexOf: (indiceBanana)");
console.log(indiceBanana);

// join: Une todos los elementos de un array en una cadena y la devuelve
let frutasUnidas = frutas.join(', ');
console.log("Salida de join:");
console.log(frutasUnidas);

// keys: Devuelve un nuevo objeto Array Iterator que contiene las claves para cada índice en el array
let claves = frutas.keys();
console.log("Salida de keys:");
for (let clave of claves) {
    console.log(clave);
}

// lastIndexOf: Devuelve el último índice en el que un cierto elemento puede encontrarse en el array
let ultimoIndiceKiwi = frutas.lastIndexOf('kiwi');
console.log("Salida de lastIndexOf: (ultimoIndiceKiwi)");
console.log(ultimoIndiceKiwi);

// pop: Elimina el último elemento de un array y lo devuelve
let ultimaFruta = frutas.pop();
console.log("Salida de pop: (ultimaFruta)");
console.log(ultimaFruta);
console.log(frutas);

// push: Añade uno o más elementos al final de un array y devuelve la nueva longitud del array
let nuevaLongitud = frutas.push('sandía');
console.log("Salida de push: (nuevaLongitud)");
console.log(nuevaLongitud);
console.log(frutas);

// reduceRight: Aplica una función a un acumulador y a cada valor del array (de derecha a izquierda) para reducirlo a un único valor
let longitudTotalDerecha = frutas.reduceRight(function(acumulador, fruta) {
    return acumulador + fruta.length;
}, 0);
console.log("Salida de reduceRight: (longitudTotalDerecha)");
console.log(longitudTotalDerecha);

// reverse: Invierte el orden de los elementos de un array
frutas.reverse();
console.log("Salida de reverse:");
console.log(frutas);

// shift: Elimina el primer elemento de un array y lo devuelve
let primeraFruta = frutas.shift();
console.log("Salida de shift: (primeraFruta)");
console.log(primeraFruta);
console.log(frutas);

// toLocaleString: Devuelve una cadena de texto representando los elementos del array
let frutasLocaleString = frutas.toLocaleString();
console.log("Salida de toLocaleString:");
console.log(frutasLocaleString);

// toString: Devuelve una cadena de texto representando los elementos del array
let frutasString = frutas.toString();
console.log("Salida de toString:");
console.log(frutasString);

// unshift: Añade uno o más elementos al inicio del array y devuelve la nueva longitud del array
nuevaLongitud = frutas.unshift('pera', 'uva');
console.log("Salida de unshift: (nuevaLongitud)");
console.log(nuevaLongitud);
console.log(frutas);

// values: Devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice en el array
let valores = frutas.values();
console.log("Salida de values:");
for (let valor of valores) {
    console.log(valor);
}