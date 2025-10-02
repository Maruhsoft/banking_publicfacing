import { useState, useEffect } from 'react';

interface BankData {
  bankName: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    hkPhone: string;
  };
  addresses: {
    usHQ: {
      address: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
    hongKong: {
      address: string;
      city: string;
      region: string;
      country: string;
    };
    london: {
      address: string;
      city: string;
      postCode: string;
      country: string;
    };
  };
  liveChatKey_smartsupp: string;
  externalUrls: {
    login: string;
    signup: string;
  };
}

export const useBankData = () => {
  const [bankData, setBankData] = useState<BankData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBankData = async () => {
      try {
        const response = await fetch('/src/data/bankData.json');
        if (!response.ok) {
          throw new Error('Failed to fetch bank data');
        }
        const data = await response.json();
        setBankData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchBankData();
  }, []);

  return { bankData, loading, error };
};