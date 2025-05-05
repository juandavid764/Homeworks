import React, { useState } from "react";
import { Graph as D3Graph } from "react-d3-graph";
import { graph } from "../utils/data";

export const View = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [residents, setResidents] = useState([]);

  const data = {
    nodes: graph.nodes.map((node) => ({ id: node })),
    links: Object.entries(graph.adjList).flatMap(([source, targets]) =>
      targets.map((target) => ({ source, target }))
    ),
  };

  const config = {
    nodeHighlightBehavior: true,
    node: { color: "lightblue", size: 300 },
    link: { highlightColor: "lightblue" },
  };

  const handleNodeClick = (nodeId) => {
    const people = graph.getPeopleInCity(nodeId);
    setSelectedCity(nodeId);
    setResidents(people);
  };

  return (
    <div className="view">
      <h1>Graph Visualization</h1>
      <D3Graph
        id="graph-id"
        data={data}
        config={config}
        onClickNode={handleNodeClick}
      />
      {selectedCity && (
        <div>
          <h2>Residents in {selectedCity}:</h2>
          <ul>
            {residents.map((person, index) => (
              <li key={index}>{person}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};