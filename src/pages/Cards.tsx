import { CreditCard, ShieldCheck, Wallet, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Cards() {
  const { t } = useLanguage();

  const cardTypes = [
    {
      name: t('cards.debit.name'),
      description: t('cards.debit.desc'),
      features: [
        t('cards.debit.feature1'),
        t('cards.debit.feature2'),
        t('cards.debit.feature3'),
        t('cards.debit.feature4'),
      ],
      icon: <CreditCard className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('cards.prepaid.name'),
      description: t('cards.prepaid.desc'),
      features: [
        t('cards.prepaid.feature1'),
        t('cards.prepaid.feature2'),
        t('cards.prepaid.feature3'),
        t('cards.prepaid.feature4'),
      ],
      icon: <Wallet className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('cards.virtual.name'),
      description: t('cards.virtual.desc'),
      features: [
        t('cards.virtual.feature1'),
        t('cards.virtual.feature2'),
        t('cards.virtual.feature3'),
        t('cards.virtual.feature4'),
      ],
      icon: <Zap className="w-12 h-12 text-blue-600" />,
    },
  ];

  const security = [
    {
      title: t('cards.security.chip'),
      description: t('cards.security.chipDesc'),
      icon: <ShieldCheck className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('cards.security.alerts'),
      description: t('cards.security.alertsDesc'),
      icon: <Zap className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('cards.security.protection'),
      description: t('cards.security.protectionDesc'),
      icon: <ShieldCheck className="w-8 h-8 text-[#F58220]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('cards.title')}</h1>
          <p className="text-xl text-gray-100 max-w-3xl">{t('cards.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {cardTypes.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#072146]">{card.name}</h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <ul className="space-y-3 mb-8">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-lg font-semibold transition-colors">
                  {t('cards.order')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#072146]">
            {t('cards.securityTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {security.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#072146]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
