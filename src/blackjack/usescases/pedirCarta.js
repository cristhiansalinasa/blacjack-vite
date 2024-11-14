/**
 * Función que toma la última carta del deck
 * @param {Array<String>} deck Debe recibir toda la baraja disponible al momento de juagr
 * @returns {String} retorna una carta del deck
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
