import _ from "underscore";

/**
 * Esta función crea un nuevo Deck
 * @param {Array<String>} tipos Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} especiales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo Deck de cartas
 */

export const crearDeck = (tipos, especiales) => {
  if (!tipos || !especiales)
    throw new Error("Tipos de carta y Tipos espciales es requerido");
  if (tipos.length == 0 || especiales.length < 0)
    throw new Error("Tipos y Especiales debe ser un arreglo de Strings ");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};

// export default crearDeck
