import { useEffect } from 'react';
import { useBankData } from '../hooks/useBankData';

declare global {
  interface Window {
    smartsupp?: any;
    _smartsupp?: any;
    $smartsupp?: any;
  }
}

export function SmartSuppChat() {
  const bankData = useBankData();

  useEffect(() => {
    if (!bankData) return;

    if (window.smartsupp || document.querySelector('script[src*="smartsuppchat.com"]')) {
      return;
    }

    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key = bankData.liveChatKey_smartsupp;

    window.smartsupp = window.smartsupp || function() {
      (window.smartsupp._ = window.smartsupp._ || []).push(arguments);
    };
    window.smartsupp._ = window.smartsupp._ || [];

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://www.smartsuppchat.com/loader.js?';

    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }, [bankData]);

  return null;
}
