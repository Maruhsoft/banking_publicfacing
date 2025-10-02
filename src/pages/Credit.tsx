import { CreditCard, Gift, Plane, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Credit() {
  const { t } = useLanguage();

  const creditCards = [
    {
      name: t('credit.cashback.name'),
      description: t('credit.cashback.desc'),
      reward: t('credit.cashback.reward'),
      features: [
        t('credit.cashback.feature1'),
        t('credit.cashback.feature2'),
        t('credit.cashback.feature3'),
        t('credit.cashback.feature4'),
      ],
      icon: <Gift className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('credit.travel.name'),
      description: t('credit.travel.desc'),
      reward: t('credit.travel.reward'),
      features: [
        t('credit.travel.feature1'),
        t('credit.travel.feature2'),
        t('credit.travel.feature3'),
        t('credit.travel.feature4'),
      ],
      icon: <Plane className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('credit.secured.name'),
      description: t('credit.secured.desc'),
      reward: t('credit.secured.reward'),
      features: [
        t('credit.secured.feature1'),
        t('credit.secured.feature2'),
        t('credit.secured.feature3'),
        t('credit.secured.feature4'),
      ],
      icon: <Shield className="w-12 h-12 text-blue-600" />,
    },
  ];

  const benefits = [
    {
      title: t('credit.benefits.rewards'),
      description: t('credit.benefits.rewardsDesc'),
      icon: <Gift className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('credit.benefits.protection'),
      description: t('credit.benefits.protectionDesc'),
      icon: <Shield className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('credit.benefits.mobile'),
      description: t('credit.benefits.mobileDesc'),
      icon: <CreditCard className="w-8 h-8 text-[#F58220]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Credit Cards Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('credit.title')}</h1>
          <p className="text-xl text-gray-100 max-w-3xl">{t('credit.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {creditCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
                  <img
                    src={
                      index === 0
                        ? "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800"
                        : index === 1
                        ? "https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=800"
                        : "https://images.pexels.com/photos/4968631/pexels-photo-4968631.jpeg?auto=compress&cs=tinysrgb&w=800"
                    }
                    alt={card.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                      {card.icon}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#072146]">{card.name}</h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <div className="text-lg font-semibold text-blue-600 mb-6">{card.reward}</div>
                  <ul className="space-y-3 mb-8">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-lg font-semibold transition-colors">
                    {t('credit.apply')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#072146]">
            {t('credit.benefitsTitle')}
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
