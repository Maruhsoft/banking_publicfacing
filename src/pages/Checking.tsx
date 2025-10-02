import { CreditCard, DollarSign, Shield, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Checking() {
  const { t } = useLanguage();

  const checkingAccounts = [
    {
      name: t('checking.basic.name'),
      description: t('checking.basic.desc'),
      fee: t('checking.basic.fee'),
      features: [
        t('checking.basic.feature1'),
        t('checking.basic.feature2'),
        t('checking.basic.feature3'),
        t('checking.basic.feature4'),
      ],
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('checking.premium.name'),
      description: t('checking.premium.desc'),
      fee: t('checking.premium.fee'),
      features: [
        t('checking.premium.feature1'),
        t('checking.premium.feature2'),
        t('checking.premium.feature3'),
        t('checking.premium.feature4'),
      ],
      icon: <Shield className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('checking.student.name'),
      description: t('checking.student.desc'),
      fee: t('checking.student.fee'),
      features: [
        t('checking.student.feature1'),
        t('checking.student.feature2'),
        t('checking.student.feature3'),
        t('checking.student.feature4'),
      ],
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
    },
  ];

  const benefits = [
    {
      title: t('checking.benefits.secure'),
      description: t('checking.benefits.secureDesc'),
      icon: <Shield className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('checking.benefits.easy'),
      description: t('checking.benefits.easyDesc'),
      icon: <CreditCard className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('checking.benefits.mobile'),
      description: t('checking.benefits.mobileDesc'),
      icon: <Smartphone className="w-8 h-8 text-[#F58220]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-[#072146] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/6289031/pexels-photo-6289031.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Checking Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('checking.title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{t('checking.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {checkingAccounts.map((account, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-6">{account.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#072146]">{account.name}</h3>
                <p className="text-gray-600 mb-4">{account.description}</p>
                <div className="text-lg font-semibold text-[#F58220] mb-6">{account.fee}</div>
                <ul className="space-y-3 mb-8">
                  {account.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-lg font-semibold transition-colors">
                  {t('checking.openAccount')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#072146]">
            {t('checking.benefitsTitle')}
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
