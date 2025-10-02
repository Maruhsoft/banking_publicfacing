import React from 'react';
import { Smartphone, Globe, CreditCard, Bell, Shield, Zap } from 'lucide-react';
import { useBankData } from '../hooks/useBankData';

const DigitalServices = () => {
  const { bankData } = useBankData();

  const digitalServices = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Banking',
      description: 'Full-featured mobile banking app for iOS and Android devices.',
      features: ['Account management', 'Mobile check deposit', 'Touch/Face ID login', 'Real-time notifications'],
      color: 'bg-blue-500'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Online Banking',
      description: 'Secure online banking platform accessible from any web browser.',
      features: ['24/7 account access', 'Transaction history', 'Statement downloads', 'Account alerts'],
      color: 'bg-green-500'
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Bill Pay',
      description: 'Convenient online bill payment system for all your recurring bills.',
      features: ['Automatic payments', 'Payment scheduling', 'Payee management', 'Payment history'],
      color: 'bg-purple-500'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Deposit',
      description: 'Deposit checks instantly using your smartphone camera.',
      features: ['Instant deposits', 'Check image capture', 'Deposit limits', 'Confirmation receipts'],
      color: 'bg-orange-500'
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: 'Account Alerts',
      description: 'Stay informed with customizable account alerts and notifications.',
      features: ['Balance alerts', 'Transaction notifications', 'Security alerts', 'Custom thresholds'],
      color: 'bg-red-500'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Digital Security',
      description: 'Advanced security features to protect your digital banking experience.',
      features: ['Multi-factor authentication', 'Biometric login', 'Fraud monitoring', 'Secure messaging'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Digital Banking Services</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Experience the future of banking with our comprehensive digital services. 
              Bank anytime, anywhere with our secure and user-friendly digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Digital Banking Solutions
            </h2>
            <p className="text-xl text-slate-600">
              Modern banking tools designed for your digital lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <div className={`${service.color} text-white p-4 inline-block mb-6`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <Zap className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={bankData?.externalUrls.signup || '#'}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Download Our Mobile App</h2>
            <p className="text-xl text-slate-600">Take your banking with you wherever you go</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Banking Made Simple</h3>
              <p className="text-slate-600 mb-6">
                Our award-winning mobile app puts the power of banking in your pocket. 
                Manage your accounts, pay bills, deposit checks, and more with just a few taps.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-slate-700">Bank-level security with biometric authentication</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-blue-500 mr-3" />
                  <span className="text-slate-700">Lightning-fast transactions and real-time updates</span>
                </div>
                <div className="flex items-center">
                  <Bell className="w-6 h-6 text-purple-500 mr-3" />
                  <span className="text-slate-700">Smart notifications to keep you informed</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href={bankData?.externalUrls.signup || '#'}
                  className="bg-black text-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-gray-800"
                >
                  Download for iOS
                </a>
                <a 
                  href={bankData?.externalUrls.signup || '#'}
                  className="bg-green-600 text-white px-6 py-3 font-semibold transition-all duration-300 hover:bg-green-700"
                >
                  Download for Android
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white inline-block">
                <Smartphone className="w-32 h-32 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Advanced Security Features</h2>
            <p className="text-xl text-slate-600">Your security is our top priority</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 mb-4 inline-block">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">256-bit Encryption</h3>
              <p className="text-slate-600">Military-grade encryption protects all your data and transactions.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 mb-4 inline-block">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Biometric Authentication</h3>
              <p className="text-slate-600">Use your fingerprint or face to securely access your accounts.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 mb-4 inline-block">
                <Bell className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Real-time Monitoring</h3>
              <p className="text-slate-600">24/7 fraud monitoring and instant alerts for suspicious activity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Digital?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join millions of customers who have already made the switch to digital banking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={bankData?.externalUrls.signup || '#'}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Open Digital Account
            </a>
            <a 
              href={bankData?.externalUrls.login || '#'}
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Sign In Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalServices;