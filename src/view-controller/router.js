import { components } from '../view/index.js';

// -------------------Función que asocia el valor de container para cada ruta---------------------

export const changeTmp = (hash) => {
  const container = document.getElementById('container');
  // La hash propiedad  devuelve  un '#'seguido del identificador de fragmento de la URL.
  window.location.hash = hash;
  container.innerHTML = '';
  switch (hash) {
    case "": // agregame al final de container components y su propiedad
      container.appendChild(components.signIn());
      break;
    case "#/signUp":
      container.appendChild(components.signUp());
      break;
    case "#/inspection":
      container.appendChild(components.inspection());
      break;
    case "#/home":
      container.appendChild(components.home());
      break;
    case "#/actuacion":
      container.appendChild(components.actuacion());
      break;
    case "#/documentos":
      container.appendChild(components.documentos());
      break;
    case "#/homework":
      container.appendChild(components.homework());
      break;
    case "#/viewReport":
      container.appendChild(components.viewReport());
      break;
    case "#/homeCases":
      container.appendChild(components.homeCases());
      break;
    default:
      return container.appendChild(components.Different());
  }

  return changeTmp;
};
