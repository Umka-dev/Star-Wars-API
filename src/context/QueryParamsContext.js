import React, { createContext, useContext, useState } from 'react';

// Create context QueryParamsContext
const QueryParamsContext = createContext();

// Component's provider
export const QueryParamsProvider = ({ children }) => {
  const [queryParams, setQueryParams] = useState(new URLSearchParams());

  return (
    <QueryParamsContext.Provider value={{ queryParams, setQueryParams }}>
      {children}
    </QueryParamsContext.Provider>
  );
};

// Hook for using context QueryParamsContext
export const useQueryParams = () => useContext(QueryParamsContext);
