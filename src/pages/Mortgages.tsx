import { Home, TrendingDown, Calculator, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Mortgages() {
  const { t } = useLanguage();

  const mortgageTypes = [
    {
      name: t('mortgages.fixed.name'),
      description: t('mortgages.fixed.desc'),
      rate: t('mortgages.fixed.rate'),
      features: [
        t('mortgages.fixed.feature1'),
        t('mortgages.fixed.feature2'),
        t('mortgages.fixed.feature3'),
        t('mortgages.fixed.feature4'),
      ],
      icon: <Home className="w-12 h-12 text-green-600" />,
    },
    {
      name: t('mortgages.adjustable.name'),
      description: t('mortgages.adjustable.desc'),
      rate: t('mortgages.adjustable.rate'),
      features: [
        t('mortgages.adjustable.feature1'),
        t('mortgages.adjustable.feature2'),
        t('mortgages.adjustable.feature3'),
        t('mortgages.adjustable.feature4'),
      ],
      icon: <TrendingDown className="w-12 h-12 text-green-600" />,
    },
    {
      name: t('mortgages.refinance.name'),
      description: t('mortgages.refinance.desc'),
      rate: t('mortgages.refinance.rate'),
      features: [
        t('mortgages.refinance.feature1'),
        t('mortgages.refinance.feature2'),
        t('mortgages.refinance.feature3'),
        t('mortgages.refinance.feature4'),
      ],
      icon: <Calculator className="w-12 h-12 text-green-600" />,
    },
  ];

  const process = [
    {
      step: '1',
      title: t('mortgages.process.preapproval'),
      description: t('mortgages.process.preapprovalDesc'),
    },
    {
      step: '2',
      title: t('mortgages.process.search'),
      description: t('mortgages.process.searchDesc'),
    },
    {
      step: '3',
      title: t('mortgages.process.application'),
      description: t('mortgages.process.applicationDesc'),
    },
    {
      step: '4',
      title: t('mortgages.process.closing'),
      description: t('mortgages.process.closingDesc'),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-r from-green-800 to-green-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Mortgages Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('mortgages.title')}</h1>
          <p className="text-xl text-gray-100 max-w-3xl">{t('mortgages.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {mortgageTypes.map((mortgage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-6">{mortgage.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#072146]">{mortgage.name}</h3>
                <p className="text-gray-600 mb-4">{mortgage.description}</p>
                <div className="text-lg font-semibold text-green-600 mb-6">{mortgage.rate}</div>
                <ul className="space-y-3 mb-8">
                  {mortgage.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-lg font-semibold transition-colors">
                  {t('mortgages.apply')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#072146]">
            {t('mortgages.processTitle')}
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#F58220] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#072146]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 text-[#F58220] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-[#072146]">{t('mortgages.calculatorTitle')}</h2>
          <p className="text-gray-600 mb-8">{t('mortgages.calculatorDesc')}</p>
          <button className="bg-[#F58220] hover:bg-[#e67617] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {t('mortgages.useCalculator')}
          </button>
        </div>
      </section>
    </div>
  );
}
