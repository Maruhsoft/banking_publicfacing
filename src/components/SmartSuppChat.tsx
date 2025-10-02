import { useEffect } from 'react';
import { useBankData } from '../hooks/useBankData';

declare global {
  interface Window {
    smartsupp?: (command: string, ...args: any[]) => void;
    $smartsupp?: any;
    smartsupp_key?: string;
  }
}

export function SmartSuppChat() {
  const bankData = useBankData();

  useEffect(() => {
    if (!bankData || window.$smartsupp) return;

    window.smartsupp_key = bankData.liveChatKey_smartsupp;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = '${bankData.liveChatKey_smartsupp}';
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
      })(document);
    `;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src*="smartsuppchat.com"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [bankData]);

  return null;
}
