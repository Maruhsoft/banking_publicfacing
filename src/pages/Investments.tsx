import React from 'react';
import { TrendingUp, PieChart, Target, Shield, Calculator, Users } from 'lucide-react';
import { useBankData } from '../hooks/useBankData';

const Investments = () => {
  const { bankData } = useBankData();

  const investmentServices = [
    {
      icon: <PieChart className="w-12 h-12" />,
      title: 'Investment Accounts',
      description: 'Diversified investment portfolios tailored to your risk tolerance and goals.',
      features: ['Mutual funds', 'ETFs', 'Individual stocks', 'Bonds and fixed income'],
      color: 'bg-blue-500'
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Retirement Planning',
      description: 'Comprehensive retirement planning services to secure your financial future.',
      features: ['401(k) plans', 'IRA accounts', 'Roth IRA', 'Pension planning'],
      color: 'bg-green-500'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Wealth Management',
      description: 'Personalized wealth management strategies for high-net-worth individuals.',
      features: ['Portfolio management', 'Asset allocation', 'Tax optimization', 'Estate planning'],
      color: 'bg-purple-500'
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services to achieve your life goals.',
      features: ['Goal-based planning', 'Cash flow analysis', 'Insurance planning', 'Education funding'],
      color: 'bg-orange-500'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Risk Management',
      description: 'Protect your investments with sophisticated risk management strategies.',
      features: ['Portfolio diversification', 'Hedging strategies', 'Insurance products', 'Risk assessment'],
      color: 'bg-red-500'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Advisory Services',
      description: 'Expert financial advisory services from certified financial planners.',
      features: ['Personal consultations', 'Investment research', 'Market analysis', 'Performance reporting'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Investment Services</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Build and protect your wealth with our comprehensive investment and wealth management services. 
              From retirement planning to portfolio management, we're here to help you achieve your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Investment & Wealth Management
            </h2>
            <p className="text-xl text-slate-600">
              Professional investment services to grow and protect your wealth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentServices.map((service, index) => (
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
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Investment Philosophy</h2>
            <p className="text-xl text-slate-600">Principles that guide our investment approach</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 mb-4 inline-block">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Goal-Oriented</h3>
              <p className="text-slate-600">Every investment strategy is aligned with your specific financial goals and timeline.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 mb-4 inline-block">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Risk-Aware</h3>
              <p className="text-slate-600">We balance growth potential with risk management to protect your investments.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 mb-4 inline-block">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Long-Term Focus</h3>
              <p className="text-slate-600">Our strategies are designed for long-term wealth building and preservation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Investment Performance</h2>
            <p className="text-xl text-slate-600">Track record of delivering results for our clients</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.5B+</div>
              <div className="text-slate-600">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-slate-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-slate-600">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">8.2%</div>
              <div className="text-slate-600">Average Annual Return</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Building Your Wealth Today</h2>
          <p className="text-xl text-purple-100 mb-8">
            Schedule a consultation with our investment specialists to create your personalized investment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={bankData?.externalUrls.signup || '#'}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Open Investment Account
            </a>
            <a 
              href={bankData?.externalUrls.signup || '#'}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investments;