import "../styles/BinaryTree.css";

export const TreeNode = ({ node, onInsert }) => {
  if (!node) return null;

  return (
    <div className="flex flex-col items-center">
      {/* Nodo circular */}
      <div className="bg-blue-500 text-white font-bold rounded-full shadow-md flex items-center justify-center w-16 h-16">
        {node.valor}
      </div>

      {/* Botones debajo del nodo */}
      <div className="mt-2 flex space-x-2">
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-sm"
          onClick={() => onInsert(node, "izquierda")}
        >
          Left
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
          onClick={() => onInsert(node, "derecha")}
        >
          Right
        </button>
      </div>

      {/* Subárboles */}
      <div className="flex mt-4 space-x-4">
        <TreeNode node={node.izquierda} onInsert={onInsert} />
        <TreeNode node={node.derecha} onInsert={onInsert} />
      </div>
    </div>
  );
};
