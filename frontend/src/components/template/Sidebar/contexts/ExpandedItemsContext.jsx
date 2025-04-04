import React, { createContext, useState } from "react";

export const ExpandedItemsContext = createContext([]);

export const ExpandedItemsProvider = ({ children }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  return (
    <ExpandedItemsContext.Provider value={{ expandedItems, setExpandedItems }}>
      {children}
    </ExpandedItemsContext.Provider>
  );
};
