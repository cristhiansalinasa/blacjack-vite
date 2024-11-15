/**
 * Función que retorna el valor correspondiente a la carta que va en parametro
 * @param {String} carta Ejemplo: '3H'
 * @returns {Number} valor de la carta
 */


export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  }