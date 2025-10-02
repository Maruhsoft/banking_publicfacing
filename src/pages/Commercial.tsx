import React from 'react';
import { Building, Globe, TrendingUp, Shield, Users, Briefcase } from 'lucide-react';
import { useBankData } from '../hooks/useBankData';

const Commercial = () => {
  const { bankData } = useBankData();

  const commercialServices = [
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Corporate Banking',
      description: 'Comprehensive banking solutions for large corporations and enterprises.',
      features: ['Multi-currency accounts', 'Corporate credit facilities', 'Cash pooling', 'Dedicated relationship management'],
      color: 'bg-blue-500'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Treasury Services',
      description: 'Advanced treasury management solutions for complex financial operations.',
      features: ['Liquidity management', 'Risk management tools', 'Investment services', 'Financial reporting'],
      color: 'bg-green-500'
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Commercial Loans',
      description: 'Flexible financing solutions for large-scale commercial projects.',
      features: ['Term loans', 'Revolving credit facilities', 'Project financing', 'Syndicated loans'],
      color: 'bg-purple-500'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'International Banking',
      description: 'Global banking services for international business operations.',
      features: ['Trade finance', 'Foreign exchange', 'Letters of credit', 'International wire transfers'],
      color: 'bg-orange-500'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Risk Management',
      description: 'Comprehensive risk management and hedging solutions.',
      features: ['Interest rate hedging', 'Currency hedging', 'Commodity hedging', 'Credit risk management'],
      color: 'bg-red-500'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Corporate Advisory',
      description: 'Strategic financial advisory services for corporate clients.',
      features: ['M&A advisory', 'Capital structure optimization', 'Financial restructuring', 'Strategic planning'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Commercial Banking</h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              Sophisticated financial solutions for corporations, institutions, and large enterprises. 
              Partner with us for strategic banking services that drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Commercial Banking Solutions
            </h2>
            <p className="text-xl text-slate-600">
              Enterprise-grade financial services tailored for complex business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
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
                    Contact Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Global Presence</h2>
            <p className="text-xl text-slate-600">Serving clients worldwide with local expertise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 mb-4 inline-block">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">United States</h3>
              <p className="text-slate-600">{bankData?.addresses.usHQ.address}, {bankData?.addresses.usHQ.city}</p>
              <p className="text-slate-600">{bankData?.contact.phone}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-6 mb-4 inline-block">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Hong Kong</h3>
              <p className="text-slate-600">{bankData?.addresses.hongKong.address}, {bankData?.addresses.hongKong.city}</p>
              <p className="text-slate-600">{bankData?.contact.hkPhone}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-6 mb-4 inline-block">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">London</h3>
              <p className="text-slate-600">{bankData?.addresses.london.address}, {bankData?.addresses.london.city}</p>
              <p className="text-slate-600">{bankData?.addresses.london.postCode}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Enterprise Banking?</h2>
          <p className="text-xl text-slate-100 mb-8">
            Connect with our commercial banking specialists to discuss your enterprise financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={bankData?.externalUrls.signup || '#'}
              className="bg-white text-slate-800 hover:bg-gray-100 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Schedule Meeting
            </a>
            <a 
              href={bankData?.contact.email ? `mailto:${bankData.contact.email}` : '#'}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 font-semibold text-lg transition-all duration-300"
            >
              Contact Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commercial;