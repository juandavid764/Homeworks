import '../styles/BinaryTree.css';
import {TreeNode} from './TreeNode.jsx';
import React, { useState } from 'react';

export const BinaryTree = ({ initialRoot }) => {
  const [tree, setTree] = useState(initialRoot);

  const insertNode = (current, side) => {
    if (!current[side]) {
      current[side] = {
        valor: Math.floor(Math.random() * 100),
        izquierda: null,
        derecha: null
      };
      setTree({ ...tree });
    }
  };

return (
    <div>
        <TreeNode node={tree} onInsert={insertNode} />
    </div>
);
};
