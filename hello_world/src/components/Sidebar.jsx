import { useState } from "react";
import { root } from "../models/Tree.jsx";
import { ChevronDown, ChevronRight } from "lucide-react";

export const Sidebar = ({ setComponent }) => {
  const [showChildren, setShowChildren] = useState({});
  const [activeTitle, setActiveTitle] = useState(""); // Para resaltar elemento activo

  const toggleChildrenVisibility = (title) => {
    setShowChildren((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <div className="bg-gray-900 w-64 h-screen p-2 text-white shadow-md overflow-y-auto">
      {root.hijos.map((node) => (
        <div key={node.title} className="mb-1">
          <button
            className={`w-full px-4 py-2 flex items-center justify-between text-left hover:bg-gray-700 transition-all ${
              activeTitle === node.title ? "bg-blue-600" : ""
            }`}
            onClick={() => {
              setComponent(node.component);
              toggleChildrenVisibility(node.title);
              setActiveTitle(node.title);
            }}
          >
            <span className="font-medium">{node.title}</span>
            {node.hijos?.length > 0 &&
              (showChildren[node.title] ? (
                <ChevronDown className="w-4 h-4 text-white" />
              ) : (
                <ChevronRight className="w-4 h-4 text-white" />
              ))}
          </button>

          {showChildren[node.title] && node.hijos?.length > 0 && (
            <div className="pl-4 bg-gray-800 transition-all">
              {node.hijos.map((subItem) => (
                <button
                  key={subItem.title}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-700 text-white transition-all ${
                    activeTitle === subItem.title ? "bg-blue-600" : ""
                  }`}
                  onClick={() => {
                    setComponent(subItem.component);
                    setActiveTitle(subItem.title);
                  }}
                >
                  {subItem.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
