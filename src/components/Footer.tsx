import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { useBankData } from '../hooks/useBankData';

const Footer = () => {
  const { bankData } = useBankData();

  const footerSections = [
    {
      title: 'Personal Banking',
      links: [
        'Checking Accounts',
        'Savings Accounts',
        'Credit Cards',
        'Personal Loans',
        'Mortgages',
        'Auto Loans'
      ]
    },
    {
      title: 'Business Banking',
      links: [
        'Business Checking',
        'Business Savings',
        'Business Loans',
        'Merchant Services',
        'Cash Management',
        'Payroll Services'
      ]
    },
    {
      title: 'Digital Services',
      links: [
        'Online Banking',
        'Mobile App',
        'Bill Pay',
        'Mobile Deposit',
        'Account Alerts',
        'eStatements'
      ]
    },
    {
      title: 'Support',
      links: [
        'Customer Service',
        'Find a Branch',
        'ATM Locator',
        'Contact Us',
        'Help Center',
        'Security Center'
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
              <p className="text-slate-300">
                Get the latest updates on banking services, financial tips, and exclusive offers.
              </p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 transition-colors flex items-center">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-6 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img 
                  src="/icons8-bank-48.png" 
                  alt="IBK Bank" 
                  className="w-12 h-12 mr-3"
                />
                <div>
                  <h2 className="text-2xl font-bold">{bankData?.bankName || 'IBK'}</h2>
                  <p className="text-sm text-slate-400">{bankData?.tagline || 'Digital Banking'}</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                {bankData?.bankName || 'IBK Digital Banking'} is committed to providing innovative financial solutions 
                that help our customers achieve their financial goals with confidence and security.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300">
                    {bankData?.addresses.usHQ.address}, {bankData?.addresses.usHQ.city}, {bankData?.addresses.usHQ.state} {bankData?.addresses.usHQ.zipCode}
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300">{bankData?.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-300">{bankData?.contact.email}</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 mt-8">
                <a href={bankData?.externalUrls.signup || '#'} className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={bankData?.externalUrls.signup || '#'} className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={bankData?.externalUrls.signup || '#'} className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={bankData?.externalUrls.signup || '#'} className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-6 text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={bankData?.externalUrls.signup || '#'}
                        className="text-slate-300 hover:text-blue-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="text-slate-400 text-sm">
                © 2025 {bankData?.bankName || 'IBK Digital Banking'}. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
                <a href="/accessibility" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Accessibility
                </a>
                <a href="/security" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Security
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm">Member FDIC</span>
              <span className="text-slate-400 text-sm">Equal Housing Lender</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;