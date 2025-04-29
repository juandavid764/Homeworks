export const arbol = {
    valor: 10,
    izquierda: {
      valor: 5,
      izquierda: {
        valor: 2,
        izquierda: null,
        derecha: null
      },
      derecha: {
        valor: 7,
        izquierda: null,
        derecha: null
      }
    },
    derecha: {
      valor: 15,
      izquierda: null,
      derecha: {
        valor: 20,
        izquierda: null,
        derecha: null
      }
    }
  };
  
  export const arbolAdaptado = {
    name: '10', // Nodo raíz
    children: [
      {
        name: '5', // Subárbol izquierdo
        children: [
          {
            name: '2', // Nodo hoja izquierda
          },
          {
            name: '7', // Nodo hoja derecha
          },
        ],
      },
      {
        name: '15', // Subárbol derecho
        children: [
          {
            name: '20', // Nodo hoja derecha
          },
        ],
      },
    ],
  };