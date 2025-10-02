import { Smartphone, Lock, Zap, Bell } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Digital() {
  const { t } = useLanguage();

  const services = [
    {
      name: t('digital.mobile.name'),
      description: t('digital.mobile.desc'),
      features: [
        t('digital.mobile.feature1'),
        t('digital.mobile.feature2'),
        t('digital.mobile.feature3'),
        t('digital.mobile.feature4'),
      ],
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('digital.online.name'),
      description: t('digital.online.desc'),
      features: [
        t('digital.online.feature1'),
        t('digital.online.feature2'),
        t('digital.online.feature3'),
        t('digital.online.feature4'),
      ],
      icon: <Zap className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('digital.alerts.name'),
      description: t('digital.alerts.desc'),
      features: [
        t('digital.alerts.feature1'),
        t('digital.alerts.feature2'),
        t('digital.alerts.feature3'),
        t('digital.alerts.feature4'),
      ],
      icon: <Bell className="w-12 h-12 text-blue-600" />,
    },
  ];

  const security = [
    {
      title: t('digital.security.encryption'),
      description: t('digital.security.encryptionDesc'),
      icon: <Lock className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('digital.security.biometric'),
      description: t('digital.security.biometricDesc'),
      icon: <Smartphone className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('digital.security.monitoring'),
      description: t('digital.security.monitoringDesc'),
      icon: <Bell className="w-8 h-8 text-[#F58220]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('digital.title')}</h1>
          <p className="text-xl text-gray-100 max-w-3xl">{t('digital.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#072146]">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-lg font-semibold transition-colors">
                  {t('digital.getStarted')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#072146]">
            {t('digital.securityTitle')}
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

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Smartphone className="w-16 h-16 text-[#F58220] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-[#072146]">{t('digital.appTitle')}</h2>
          <p className="text-gray-600 mb-8">{t('digital.appDesc')}</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              {t('digital.downloadIOS')}
            </button>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              {t('digital.downloadAndroid')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
