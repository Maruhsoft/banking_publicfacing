import { Shield, Smartphone, Headphones, Gift } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBankData } from '../hooks/useBankData';

export function Home() {
  const { t } = useLanguage();
  const bankData = useBankData();

  if (!bankData) return null;

  const handleOpenAccount = () => {
    window.location.href = bankData.externalUrls.signup;
  };

  const features = [
    {
      icon: Shield,
      title: t('feature.secure'),
      description: t('feature.secureDesc'),
    },
    {
      icon: Smartphone,
      title: t('feature.mobile'),
      description: t('feature.mobileDesc'),
    },
    {
      icon: Headphones,
      title: t('feature.support'),
      description: t('feature.supportDesc'),
    },
    {
      icon: Gift,
      title: t('feature.rewards'),
      description: t('feature.rewardsDesc'),
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#072146] leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <button
                onClick={handleOpenAccount}
                className="bg-[#F58220] hover:bg-[#e67617] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
              >
                {t('hero.cta')}
              </button>
            </div>
            <div className="relative h-64 md:h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-lg shadow-2xl flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="text-6xl md:text-8xl font-bold text-[#072146]">$250</div>
                  <div className="text-2xl md:text-3xl text-gray-700">Cash Bonus</div>
                  <div className="text-sm text-gray-500">Limited Time Offer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#072146] mb-4">
              Why Choose {bankData.bankName}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {bankData.tagline}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="bg-blue-100 w-14 h-14 flex items-center justify-center mb-4">
                  <feature.icon className="text-[#1565C0]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#072146] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-[#072146] to-[#1565C0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">100+</div>
              <div className="text-blue-200">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">10M+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#072146] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Open your account today and start enjoying all the benefits of banking with {bankData.bankName}
          </p>
          <button
            onClick={handleOpenAccount}
            className="bg-[#F58220] hover:bg-[#e67617] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
          >
            {t('nav.openAccount')}
          </button>
        </div>
      </section>
    </div>
  );
}
