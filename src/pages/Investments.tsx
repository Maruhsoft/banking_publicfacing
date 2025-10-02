import { TrendingUp, PieChart, BarChart3, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Investments() {
  const { t } = useLanguage();

  const investmentOptions = [
    {
      name: t('investments.retirement.name'),
      description: t('investments.retirement.desc'),
      features: [
        t('investments.retirement.feature1'),
        t('investments.retirement.feature2'),
        t('investments.retirement.feature3'),
        t('investments.retirement.feature4'),
      ],
      icon: <Target className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('investments.brokerage.name'),
      description: t('investments.brokerage.desc'),
      features: [
        t('investments.brokerage.feature1'),
        t('investments.brokerage.feature2'),
        t('investments.brokerage.feature3'),
        t('investments.brokerage.feature4'),
      ],
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('investments.managed.name'),
      description: t('investments.managed.desc'),
      features: [
        t('investments.managed.feature1'),
        t('investments.managed.feature2'),
        t('investments.managed.feature3'),
        t('investments.managed.feature4'),
      ],
      icon: <PieChart className="w-12 h-12 text-blue-600" />,
    },
  ];

  const benefits = [
    {
      title: t('investments.benefits.diversify'),
      description: t('investments.benefits.diversifyDesc'),
      icon: <PieChart className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('investments.benefits.guidance'),
      description: t('investments.benefits.guidanceDesc'),
      icon: <Target className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('investments.benefits.tools'),
      description: t('investments.benefits.toolsDesc'),
      icon: <BarChart3 className="w-8 h-8 text-[#F58220]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('investments.title')}</h1>
          <p className="text-xl text-gray-100 max-w-3xl">{t('investments.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {investmentOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-6">{option.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#072146]">{option.name}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-lg font-semibold transition-colors">
                  {t('investments.getStarted')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#072146]">
            {t('investments.benefitsTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#072146]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
