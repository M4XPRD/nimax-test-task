import React, {
  useCallback,
  useMemo, useState,
} from 'react';
import NetworkContext from './NetworkContext';

const NetworkProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isNetworkError, setIsNetworkError] = useState(false);

  const setLoading = useCallback((loading) => {
    setIsLoading(loading);
  }, [setIsLoading]);

  const setNetworkError = useCallback((error) => {
    setIsNetworkError(error);
  }, [setIsNetworkError]);

  const providedData = useMemo(() => ({
    isLoading,
    setLoading,
    isNetworkError,
    setNetworkError,
  }), [
    isLoading,
    setLoading,
    isNetworkError,
    setNetworkError,
  ]);

  return (
    <NetworkContext.Provider value={providedData}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkProvider;
