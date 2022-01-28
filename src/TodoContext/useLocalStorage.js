import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        }
        let parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    }, 1000);
  });

  const saveItems = newItems => {
    try {
      const stringifyItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifyItems);
      setItem(newItems);
    } catch (e) {
      setError(e);
    }
  };

  return {
    item,
    saveItems,
    loading,
    error,
  };
}

export { useLocalStorage };
