import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar.jsx";
import { View } from "../components/view.jsx";

export const HomePage = () => {
  const [component, setComponent] = useState(null);

  return (
    <div className="flex">
      <Sidebar setComponent={setComponent} />
      <View Component={component} />
    </div>
  );
};