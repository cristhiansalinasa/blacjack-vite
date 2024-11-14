/**
 * Esta función despliega graficamente las cartas seleccionadas en el div correspondiente
 * @param {String} carta Recibe carta para concatenar codigo y asociar a img de carta
 * @param {String} div corresponde a division del documento donde se desplegará la carta
 */

export const renderCarta = (carta, div) => {
  if (!carta || !div) throw Error("La carta y el div son requeridos");
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  div.append(imgCarta);
};
