import React from "react";
import Tree from "react-d3-tree";
import { arbol, arbolAdaptado } from "../utils/data.js";
import { BinaryTree } from "../components/BinaryTree.jsx";
import { ArbolBinario } from "../models/BinaryTree.js";

export const HomePage = () => {
  const miArbol = new ArbolBinario();
  console.log("\nPreorden: ");
  miArbol.preOrden(arbol);
  console.log("\nInorden: ");
  miArbol.inOrden(arbol);
  console.log("\nPosorden: ");
  miArbol.postOrden(arbol);


  return (
    <>
      <div className="flex flex-col bg-gray-100 p-4 rounded shadow-md">
        <h1 className="font-bold">Binary Tree</h1>
        <div>
          <BinaryTree initialRoot={arbol} />
        </div>
        <div>
          <button></button>
        </div>
      </div>
      <br />
      <div className="flex flex-col bg-gray-100 p-4 rounded shadow-md">
        <h1 className="font-bold">Binary Tree with react-d3-tree</h1>
        <Tree data={arbolAdaptado} />
      </div>
    </>
  );
}
