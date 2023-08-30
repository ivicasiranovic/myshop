import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // Retrieve the stored value from local storage using the provided key
  const storedValue = localStorage.getItem(key);

  // If the stored value is not null, parse it as JSON; otherwise, use the provided initialValue
  const initial = storedValue !== null ? JSON.parse(storedValue) : initialValue;

  // Initialize state using the parsed initial value or the provided initialValue
  const [value, setValue] = useState(initial);

  // Define the updateValue function to update state and store the updated value in local storage
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Return the current value and the updateValue function
  return [value, updateValue];
}

export default useLocalStorage;
