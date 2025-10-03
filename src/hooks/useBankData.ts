import { useState, useEffect } from 'react';
import { BankData } from '../types';

export function useBankData() {
  const [bankData, setBankData] = useState<BankData | null>(null);

  useEffect(() => {
    fetch('/bankData.json')
      .then(res => res.json())
      .then(data => setBankData(data))
      .catch(err => console.error('Failed to load bank data:', err));
  }, []);

  return bankData;
}
