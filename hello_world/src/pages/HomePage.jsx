import React, { useState } from "react";
import { View } from "../components/view.jsx";

export const HomePage = () => {
  const [component, setComponent] = useState(null);

  return (
    <div className="flex">
      <View Component={component} />
    </div>
  );
};