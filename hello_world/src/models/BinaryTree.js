import { Nodo } from './Node.js';

export class ArbolBinario {
  constructor() {
    this.raiz = null;
  }

  insertarData(nodo) {
    if (!nodo) return;
    this.insertar(nodo.valor); // Inserta el valor actual
    this.insertarData(nodo.izquierda); // Recorre el subárbol izquierdo
    this.insertarData(nodo.derecha); // Recorre el subárbol derecho
  }

  insertar(valor) {
    const nuevoNodo = new Nodo(valor);
    if (!this.raiz) {
      this.raiz = nuevoNodo;
      return;
    }

    let actual = this.raiz;
    while (true) {
      if (valor < actual.valor) {
        if (!actual.izquierda) {
          actual.izquierda = nuevoNodo;
          return;
        }
        actual = actual.izquierda;
      } else {
        if (!actual.derecha) {
          actual.derecha = nuevoNodo;
          return;
        }
        actual = actual.derecha;
      }
    }
  }

  search(valor) {
    if (!this.raiz) return false;
    let actual = this.raiz;

    while (actual) {
      if (valor === actual.valor) return true;
      if (valor < actual.valor) actual = actual.izquierda;
      else actual = actual.derecha;
    }
    return false;
  }

  preOrden(nodo) {
    if (!nodo) return;
    console.log(nodo.valor);
    this.preOrden(nodo.izquierda);
    this.preOrden(nodo.derecha);
  }

  inOrden(nodo) {
    if (!nodo) return;
    this.inOrden(nodo.izquierda);
    console.log(nodo.valor);
    this.inOrden(nodo.derecha);
  }

  postOrden(nodo) {
    if (!nodo) return;
    this.postOrden(nodo.izquierda);
    this.postOrden(nodo.derecha);
    console.log(nodo.valor);
  }
}
