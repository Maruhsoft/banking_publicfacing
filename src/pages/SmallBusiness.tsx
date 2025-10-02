import React from 'react';
import { Building2, CreditCard, TrendingUp, Users, Calculator, Shield } from 'lucide-react';
import { useBankData } from '../hooks/useBankData';

const SmallBusiness = () => {
  const { bankData } = useBankData();

  const businessServices = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Business Checking',
      description: 'Streamlined business checking accounts designed for small business operations.',
      features: ['No monthly fees with minimum balance', 'Free business debit card', 'Online banking and bill pay', 'Mobile deposit'],
      color: 'bg-blue-500'
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: 'Business Loans',
      description: 'Flexible financing solutions to help your business grow and succeed.',
      features: ['SBA loans available', 'Equipment financing', 'Lines of credit', 'Quick approval process'],
      color: 'bg-green-500'
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: 'Merchant Services',
      description: 'Accept payments seamlessly with our comprehensive merchant solutions.',
      features: ['Credit card processing', 'Point-of-sale systems', 'Online payment gateway', 'Mobile payments'],
      color: 'bg-purple-500'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Cash Management',
      description: 'Optimize your cash flow with advanced treasury management tools.',
      features: ['ACH services', 'Wire transfers', 'Remote deposit capture', 'Account reconciliation'],
      color: 'bg-orange-500'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Payroll Services',
      description: 'Simplify payroll processing with our integrated payroll solutions.',
      features: ['Direct deposit', 'Tax filing services', 'Employee self-service portal', 'Time tracking integration'],
      color: 'bg-red-500'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Business Insurance',
      description: 'Protect your business with comprehensive insurance coverage options.',
      features: ['General liability', 'Property insurance', 'Workers compensation', 'Cyber liability'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Small Business Banking</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Empower your business with banking solutions designed for entrepreneurs and small business owners. 
              From startup to growth, we're here to support your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Business Banking Solutions
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive financial services to help your business thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
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
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Resources */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Business Resources</h2>
            <p className="text-xl text-slate-600">Tools and insights to help your business succeed</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 mb-4 inline-block">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Financial Planning</h3>
              <p className="text-slate-600">Expert guidance for business financial planning and growth strategies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 mb-4 inline-block">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Market Insights</h3>
              <p className="text-slate-600">Stay informed with industry trends and market analysis reports.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 mb-4 inline-block">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Business Support</h3>
              <p className="text-slate-600">Dedicated relationship managers and 24/7 customer support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl text-green-100 mb-8">
            Partner with us and take your business to the next level with our comprehensive banking solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={bankData?.externalUrls.signup || '#'}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Open Business Account
            </a>
            <a 
              href={bankData?.externalUrls.signup || '#'}
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallBusiness;