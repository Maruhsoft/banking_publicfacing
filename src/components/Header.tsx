import React, { useState } from 'react';
import { Menu, X, Phone, Search, User, ChevronDown } from 'lucide-react';
import { useBankData } from '../hooks/useBankData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { bankData } = useBankData();

  const navigationItems = [
    { 
      name: 'Personal', 
      href: '/personal',
      dropdown: ['Checking', 'Savings', 'Credit Cards', 'Loans', 'Mortgages']
    },
    { 
      name: 'Small Business', 
      href: '/small-business',
      dropdown: ['Business Checking', 'Business Loans', 'Merchant Services', 'Cash Management']
    },
    { 
      name: 'Commercial', 
      href: '/commercial',
      dropdown: ['Corporate Banking', 'Treasury Services', 'Commercial Loans', 'International']
    },
    { 
      name: 'Investments', 
      href: '/investments',
      dropdown: ['Investment Accounts', 'Retirement Planning', 'Wealth Management', 'Financial Planning']
    },
    { 
      name: 'Digital Services', 
      href: '/digital-services',
      dropdown: ['Mobile Banking', 'Online Banking', 'Bill Pay', 'Mobile Deposit']
    }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex space-x-6">
              <a href="/branches" className="hover:text-blue-300 transition-colors">Find a Branch</a>
              <a href="/support" className="hover:text-blue-300 transition-colors">Help and Support</a>
              <a href={bankData?.externalUrls.signup || '#'} className="hover:text-blue-300 transition-colors">Careers</a>
              <a href="/accessibility" className="hover:text-blue-300 transition-colors">Web Accessibility</a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-4 h-4" />
              <span>{bankData?.contact.phone || '1-800-IBK-BANK'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/icons8-bank-48.png" 
                alt="IBK Bank" 
                className="w-12 h-12 mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold text-slate-800">{bankData?.bankName || 'IBK'}</h1>
                <p className="text-xs text-slate-600">{bankData?.tagline || 'Digital Banking'}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors">
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl border border-gray-200 py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href={bankData?.externalUrls.signup || '#'}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-slate-600 hover:text-blue-600 cursor-pointer transition-colors" />
              <a 
                href={bankData?.externalUrls.signup || '#'}
                className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition-colors font-medium"
              >
                Become a Customer
              </a>
              <a 
                href={bankData?.externalUrls.login || '#'}
                className="border border-blue-600 text-blue-600 px-6 py-2 hover:bg-blue-50 transition-colors font-medium"
              >
                Sign In
              </a>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button className="flex items-center justify-between w-full text-left text-slate-700 font-medium py-2">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="pl-4 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={bankData?.externalUrls.signup || '#'}
                        className="block text-sm text-slate-600 py-1 hover:text-blue-600"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;