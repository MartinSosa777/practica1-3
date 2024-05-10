const leer = require("prompt-sync")();
const operaciones = require("./operaciones");
const config = require("./config");

// DESARROLLAR CODIGO

/**
 * Opera los numeros con la opcion seleccionada
 * @param {String} opc seleccionada
 * @param {Number} numA a operar
 * @param {Number} numB a operar
 * @returns el resultado de la operacion realizada, al no poder realizar la opcion devuelve cero
 */
function usarCalculadoraCon(opc, numA, numB) {
  switch (opc) {
    case "S":
      return operaciones.suma(numA, numB);
    case "R":
      return operaciones.resta(numA, numB);
    case "M":
      return operaciones.multiplicacion(numA, numB);
    case "D":
      return operaciones.division(numA, numB);
    default:
      console.log(`${config.MSJ_ERROR_OPC}`);
      return config.RESULTADO_NULO;
  }
}

/**
 * Muestra el menu de operaciones predeterminadas en la calculadora
 * @returns La opcion seleccionada
 */
function mostrarMenu() {
  let opcionElegida = "def opcion elegida"
  console.log("Elija una opcion para continuar");
  console.log(` ${config.OPC_SUMAR}` + ` ${config.OPC_RESTAR}` +
    ` ${config.OPC_MULTIPLICAR}`
    + ` ${config.OPC_DIVIDIR}` + ` ${config.OPC_SALIR}  `);
  opcionElegida = leer()
  return opcionElegida;
}


/**
 * Solicita un numero para operar
 * @returns el numero a operar
 */
function solicitarNumero() {
  console.log("Ingrese un numero para operar:");
  return parseFloat(leer());
}

/**
 * Verifica si la opcion ingresada es salir
 * @param {String} opcionSeleccionada del usuario
 * @returns si la opcion es salir o no
 */
function esOpcionSalir(opcionSeleccionada) {
  return opcionSeleccionada === config.OPC_SALIR;
}

/**
 * Muestra la interfaz para usar la calculadora
 * @returns el resultado total de las operaciones realizadas
 */
function interfazCalculadora() {
  let salir = false;
  let opcion = "def opcion";
  let resultadoTotal=0;
  let numA=0;
  let numB=0;
  let resultado=0;

  while (!salir) {
    opcion=mostrarMenu();
  
    if (opcion === config.OPC_SALIR) {
      salir = true;
      console.log("Saliendo");
      
    } else {
      numA = solicitarNumero();
      numB = solicitarNumero();
      resultado = usarCalculadoraCon(opcion, numA, numB);
      resultadoTotal=resultado+resultadoTotal;
      
    }
  }
  return resultadoTotal;
}

module.exports = {
  interfazCalculadora,
  mostrarMenu,
  solicitarNumero,
  usarCalculadoraCon,
  esOpcionSalir,
};
