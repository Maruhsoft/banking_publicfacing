import { useState } from 'react';
import { Menu, X, Globe, Shield, Lock, Wifi } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBankData } from '../hooks/useBankData';
import { Language } from '../types';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
};

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const bankData = useBankData();

  if (!bankData) return null;

  const handleSignIn = () => {
    window.location.href = bankData.externalUrls.login;
  };

  const handleOpenAccount = () => {
    window.location.href = bankData.externalUrls.signup;
  };

  const navItems = [
    { key: 'home', label: bankData.bankName },
    { key: 'personal', label: t('nav.personal') },
    { key: 'business', label: t('nav.business') },
    { key: 'about', label: t('nav.about') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <header className="bg-[#072146] text-white sticky top-0 z-50 shadow-lg">
      <div className="bg-[#051833] border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end space-x-6 py-2 text-xs">
            <div className="flex items-center space-x-1.5 text-green-400">
              <Wifi size={14} />
              <span>Connected</span>
            </div>
            <div className="flex items-center space-x-1.5 text-blue-300">
              <Lock size={14} />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center space-x-1.5 text-blue-300">
              <Shield size={14} />
              <span>FDIC Insured</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img src="/icons8-bank-48.png" alt="Bank Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold">{bankData.bankName}</span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.slice(1).map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`hover:text-blue-300 transition-colors ${
                  currentPage === item.key ? 'text-blue-300 font-semibold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-2 hover:text-blue-300 transition-colors"
              >
                <Globe size={18} />
                <span className="text-sm">{languageNames[language]}</span>
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 shadow-lg">
                  {(Object.keys(languageNames) as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors ${
                        language === lang ? 'bg-blue-100 font-semibold' : ''
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={handleSignIn}
              className="text-sm hover:text-blue-300 transition-colors"
            >
              {t('nav.signin')}
            </button>
            <button
              onClick={handleOpenAccount}
              className="bg-[#F58220] hover:bg-[#e67617] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              {t('nav.openAccount')}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-800">
            <nav className="flex flex-col space-y-4">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left hover:text-blue-300 transition-colors ${
                    currentPage === item.key ? 'text-blue-300 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-blue-800 space-y-4">
                <div className="relative">
                  <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className="flex items-center space-x-2 hover:text-blue-300 transition-colors"
                  >
                    <Globe size={18} />
                    <span className="text-sm">{languageNames[language]}</span>
                  </button>
                  {langDropdownOpen && (
                    <div className="mt-2 bg-white text-gray-900 shadow-lg">
                      {(Object.keys(languageNames) as Language[]).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang);
                            setLangDropdownOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors ${
                            language === lang ? 'bg-blue-100 font-semibold' : ''
                          }`}
                        >
                          {languageNames[lang]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleSignIn}
                  className="block text-left hover:text-blue-300 transition-colors"
                >
                  {t('nav.signin')}
                </button>
                <button
                  onClick={handleOpenAccount}
                  className="bg-[#F58220] hover:bg-[#e67617] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors w-full"
                >
                  {t('nav.openAccount')}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
