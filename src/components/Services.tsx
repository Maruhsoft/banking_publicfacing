import React from 'react';
import { 
  CreditCard, 
  PiggyBank, 
  Home, 
  TrendingUp, 
  Smartphone, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useBankData } from '../hooks/useBankData';

const Services = () => {
  const { bankData } = useBankData();

  const services = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Credit Cards',
      description: 'Earn rewards and build credit with our competitive rates and flexible terms.',
      features: ['0% intro APR', 'No annual fee', 'Cash back rewards'],
      color: 'bg-blue-500'
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: 'Savings Accounts',
      description: 'Grow your money with high-yield savings accounts and competitive interest rates.',
      features: ['High interest rates', 'No minimum balance', 'FDIC insured'],
      color: 'bg-green-500'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Mortgages',
      description: 'Find the perfect home loan with our variety of mortgage options and expert guidance.',
      features: ['Low down payments', 'Fixed & variable rates', 'First-time buyer programs'],
      color: 'bg-purple-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Investments',
      description: 'Build wealth for the future with our comprehensive investment and retirement planning.',
      features: ['Portfolio management', 'Retirement planning', 'Financial advisory'],
      color: 'bg-orange-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Banking',
      description: 'Bank anywhere, anytime with our award-winning mobile app and digital services.',
      features: ['Mobile check deposit', 'Bill pay', 'Account alerts'],
      color: 'bg-indigo-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security',
      description: 'Your money and data are protected with industry-leading security measures.',
      features: ['Fraud protection', '256-bit encryption', '24/7 monitoring'],
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Banking Services Designed for You
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From everyday banking to long-term financial planning, we offer comprehensive 
            solutions to help you achieve your financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="p-8">
                <div className={`${service.color} text-white p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={bankData?.externalUrls.signup || '#'}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust {bankData?.bankName || 'IBK Digital Banking'}
            for their financial needs. Open an account today and experience banking reimagined.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={bankData?.externalUrls.signup || '#'}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Open Account
            </a>
            <a 
              href={bankData?.externalUrls.signup || '#'}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;