import { Building2, DollarSign, CreditCard, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBankData } from '../hooks/useBankData';

export function Business() {
  const { t } = useLanguage();
  const bankData = useBankData();

  if (!bankData) return null;

  const handleOpenAccount = () => {
    window.location.href = bankData.externalUrls.signup;
  };

  const solutions = [
    {
      icon: Building2,
      title: t('business.accounts.title'),
      description: t('business.accounts.desc'),
      features: [
        'Business checking and savings',
        'Cash management services',
        'ACH and wire transfers',
        'Mobile and online banking',
      ],
    },
    {
      icon: DollarSign,
      title: t('business.lending.title'),
      description: t('business.lending.desc'),
      features: [
        'Term loans and lines of credit',
        'Equipment financing',
        'Commercial real estate loans',
        'SBA loan programs',
      ],
    },
    {
      icon: CreditCard,
      title: t('business.merchant.title'),
      description: t('business.merchant.desc'),
      features: [
        'Credit card processing',
        'Point of sale systems',
        'E-commerce solutions',
        'Fraud detection tools',
      ],
    },
    {
      icon: TrendingUp,
      title: t('business.treasury.title'),
      description: t('business.treasury.desc'),
      features: [
        'Cash flow forecasting',
        'Investment management',
        'Liquidity solutions',
        'Foreign exchange services',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-[#072146] to-[#1565C0] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('business.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('business.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-r from-[#072146] to-[#1565C0] p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3">
                      <solution.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {solution.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleOpenAccount}
                    className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-full font-semibold transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#072146] mb-4">
              Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We serve businesses across various industries with tailored solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Healthcare', 'Technology', 'Manufacturing', 'Retail', 'Real Estate', 'Professional Services', 'Hospitality', 'Construction'].map(
              (industry, index) => (
                <div
                  key={index}
                  className="bg-blue-50 border border-blue-100 p-6 text-center hover:bg-blue-100 transition-colors"
                >
                  <div className="font-semibold text-[#072146]">{industry}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 md:py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with a business banking specialist to discuss your needs
          </p>
          <button
            onClick={handleOpenAccount}
            className="bg-[#F58220] hover:bg-[#e67617] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
