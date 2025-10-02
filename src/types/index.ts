export interface BankData {
  bankName: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    hkPhone: string;
  };
  addresses: {
    usHQ: Address;
    hongKong: Address;
    london: Address;
  };
  liveChatKey_smartsupp: string;
  externalUrls: {
    login: string;
    signup: string;
  };
}

export interface Address {
  address: string;
  city: string;
  state?: string;
  region?: string;
  zipCode?: string;
  postCode?: string;
  country: string;
}

export type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ko';
