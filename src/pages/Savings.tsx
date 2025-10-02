import { TrendingUp, PiggyBank, Target, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Savings() {
  const { t } = useLanguage();

  const savingsAccounts = [
    {
      name: t('savings.basic.name'),
      description: t('savings.basic.desc'),
      apy: t('savings.basic.apy'),
      features: [
        t('savings.basic.feature1'),
        t('savings.basic.feature2'),
        t('savings.basic.feature3'),
        t('savings.basic.feature4'),
      ],
      icon: <PiggyBank className="w-12 h-12 text-green-600" />,
    },
    {
      name: t('savings.high.name'),
      description: t('savings.high.desc'),
      apy: t('savings.high.apy'),
      features: [
        t('savings.high.feature1'),
        t('savings.high.feature2'),
        t('savings.high.feature3'),
        t('savings.high.feature4'),
      ],
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
    },
    {
      name: t('savings.goals.name'),
      description: t('savings.goals.desc'),
      apy: t('savings.goals.apy'),
      features: [
        t('savings.goals.feature1'),
        t('savings.goals.feature2'),
        t('savings.goals.feature3'),
        t('savings.goals.feature4'),
      ],
      icon: <Target className="w-12 h-12 text-green-600" />,
    },
  ];

  const benefits = [
    {
      title: t('savings.benefits.competitive'),
      description: t('savings.benefits.competitiveDesc'),
      icon: <TrendingUp className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('savings.benefits.fdic'),
      description: t('savings.benefits.fdicDesc'),
      icon: <Shield className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('savings.benefits.flexible'),
      description: t('savings.benefits.flexibleDesc'),
      icon: <PiggyBank className="w-8 h-8 text-[#F58220]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('savings.title')}</h1>
          <p className="text-xl text-gray-100 max-w-3xl">{t('savings.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {savingsAccounts.map((account, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-6">{account.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#072146]">{account.name}</h3>
                <p className="text-gray-600 mb-4">{account.description}</p>
                <div className="text-lg font-semibold text-green-600 mb-6">{account.apy}</div>
                <ul className="space-y-3 mb-8">
                  {account.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-lg font-semibold transition-colors">
                  {t('savings.openAccount')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#072146]">
            {t('savings.benefitsTitle')}
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
