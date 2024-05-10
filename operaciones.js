// DESARROLLAR CODIGO

/**
 * Suma los numeros 
 * @param {Number} a para sumar
 * @param {Number} b para sumar
 * @returns el resultado de sumar
 */
function suma(a, b) {
    return a+b;
}



/**
 * Resta los numeros 
 * @param {Number} a para restar
 * @param {Number} b para restar
 * @returns el resultado de restar
 */
function resta(a, b) {
    return a-b;
}

/**
 * Multiplicar los numeros 
 * @param {Number} a para multiplicar
 * @param {Number} b para multiplicar
 * @returns el resultado de multiplicar
 */
function multiplicacion(a, b) {
    return a*b;
}

/**
 * Divide los numeros 
 * @param {Number} a para dividir
 * @param {Number} b para dividir
 * @returns el resultado de dividir
 */
function division(a,b) {
    return a/b;
}


module.exports = {
    suma,
    resta,
    division,
    multiplicacion
};
