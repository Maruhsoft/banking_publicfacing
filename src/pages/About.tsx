import { Target, Eye, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBankData } from '../hooks/useBankData';

export function About() {
  const { t } = useLanguage();
  const bankData = useBankData();

  if (!bankData) return null;

  const values = [
    {
      icon: Award,
      title: t('about.integrity'),
      description: t('about.integrityText'),
    },
    {
      icon: Target,
      title: t('about.innovation'),
      description: t('about.innovationText'),
    },
    {
      icon: Eye,
      title: t('about.excellence'),
      description: t('about.excellenceText'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-[#072146] to-[#1565C0] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#072146] mb-6">
                {t('about.mission')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-12 shadow-lg">
              <div className="text-white">
                <div className="text-5xl font-bold mb-4">25+</div>
                <div className="text-xl">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-[#072146] to-[#1565C0] p-12 shadow-lg">
              <div className="text-white">
                <div className="text-5xl font-bold mb-4">100+</div>
                <div className="text-xl">Countries Worldwide</div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#072146] mb-6">
                {t('about.vision')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#072146] mb-4">
              {t('about.values')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="border border-gray-200 p-8 hover:shadow-xl transition-all text-center"
              >
                <div className="bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-[#1565C0]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#072146] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-xl text-blue-100">Banking excellence across continents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold mb-4">United States</h3>
              <p className="text-blue-100 text-sm mb-2">
                {bankData.addresses.usHQ.address}
              </p>
              <p className="text-blue-100 text-sm">
                {bankData.addresses.usHQ.city}, {bankData.addresses.usHQ.state}{' '}
                {bankData.addresses.usHQ.zipCode}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold mb-4">Hong Kong</h3>
              <p className="text-blue-100 text-sm mb-2">
                {bankData.addresses.hongKong.address}
              </p>
              <p className="text-blue-100 text-sm">
                {bankData.addresses.hongKong.city}, {bankData.addresses.hongKong.region}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold mb-4">United Kingdom</h3>
              <p className="text-blue-100 text-sm mb-2">
                {bankData.addresses.london.address}
              </p>
              <p className="text-blue-100 text-sm">
                {bankData.addresses.london.city}, {bankData.addresses.london.postCode}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
