import { renderCarta } from "./imgCarta";
import { pedirCarta } from "./pedirCarta";
import { valorCarta } from "./valorCarta";

/**
 *
 * @param {Number} puntosMinimos puntos alacnzados por usuario para superar por la computadora
 * @param {Number} puntosHTML puntos a ser enviados a pantalla
 * @param {Array} deck baraja de cartas restantes despues del juego del usuario
 */

export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck) => {
  if (!puntosMinimos) throw Error("Puntos minimos requeridos");
  if (!deck) throw Error("Deck es requerido");
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

   let divComputadora= renderCarta(carta, divCartasComputadora)
    
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
