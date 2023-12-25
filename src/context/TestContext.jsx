import React, { createContext, useState } from "react";

// Create the context
export const TestContext = createContext();

// Create the provider component
export const TestProvider = ({ children }) => {
  const [testData, setTestData] = useState("");
  const [count, setCount] = useState(0);

  return (
    <TestContext.Provider value={{ testData, setTestData, count, setCount }}>
      {children}
    </TestContext.Provider>
  );
};
