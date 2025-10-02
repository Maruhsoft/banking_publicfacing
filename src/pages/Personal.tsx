import React from 'react';
import { CreditCard, PiggyBank, Home, Car, Calculator, Shield } from 'lucide-react';
import { useBankData } from '../hooks/useBankData';

const Personal = () => {
  const { bankData } = useBankData();

  const personalServices = [
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Checking Accounts',
      description: 'Convenient everyday banking with no monthly fees and unlimited transactions.',
      features: ['No monthly maintenance fees', 'Free online banking', 'Mobile check deposit', 'ATM fee reimbursement'],
      color: 'bg-blue-500'
    },
    {
      icon: <PiggyBank className="w-12 h-12" />,
      title: 'Savings Accounts',
      description: 'Grow your money with competitive interest rates and flexible access.',
      features: ['High-yield interest rates', 'No minimum balance', 'Automatic savings plans', 'FDIC insured up to $250,000'],
      color: 'bg-green-500'
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Credit Cards',
      description: 'Build credit and earn rewards with our range of credit card options.',
      features: ['Cash back rewards', '0% intro APR offers', 'No annual fees', 'Fraud protection'],
      color: 'bg-purple-500'
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: 'Personal Loans',
      description: 'Quick and easy personal loans for life\'s important moments.',
      features: ['Competitive fixed rates', 'No prepayment penalties', 'Quick approval process', 'Flexible terms'],
      color: 'bg-orange-500'
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Mortgages',
      description: 'Find your dream home with our comprehensive mortgage solutions.',
      features: ['Low down payment options', 'First-time buyer programs', 'Fixed and adjustable rates', 'Expert guidance'],
      color: 'bg-red-500'
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: 'Auto Loans',
      description: 'Drive away with competitive auto loan rates and flexible terms.',
      features: ['New and used car financing', 'Competitive rates', 'Quick pre-approval', 'Flexible payment options'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Personal Banking</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover banking solutions designed for your personal financial goals. 
              From everyday checking to long-term savings and loans.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Personal Banking Services
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to manage your personal finances effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalServices.map((service, index) => (
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
                        <Shield className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={bankData?.externalUrls.signup || '#'}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Banking Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Open your account today and experience personalized banking solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={bankData?.externalUrls.signup || '#'}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Open Account
            </a>
            <a 
              href={bankData?.externalUrls.login || '#'}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Sign In
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personal;