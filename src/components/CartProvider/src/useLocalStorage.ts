import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getInitialItems = async (key, initialValue) => {
  try {
    const initialState = await AsyncStorage.getItem(key);

    return initialState !== null ? initialState : initialValue;
  } catch (error) {
    return initialValue;
  }
};

export default function useLocalStorage(
  key: string,
  initialValue: string,
): [string, (value: Function | string) => void, boolean] {
  const [storedValue, setStoredValue] = React.useState<any>(initialValue);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getInitialItems(key, initialValue).then(res => {
      if (res) {
        setStoredValue(res);
        setLoading(false);
      }
    });
  }, []);

  const setValue = (value: Function | string) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      AsyncStorage.setItem(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, isLoading];
}
