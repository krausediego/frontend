import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (value) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        return setDebouncedValue(value);
      }, delay || 500);

      return () => {
        clearTimeout(timer);
      };
    }
    return setDebouncedValue('');
  }, [value, delay]);

  return { debouncedValue, loading };
};
