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
              <img
                src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern Banking Experience"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072146]/80 to-transparent rounded-lg flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Banking Made Simple</h3>
                  <p className="text-blue-100">Experience the future of financial services</p>
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

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#072146]">
                Mobile Banking at Your Fingertips
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Manage your finances anywhere, anytime with our award-winning mobile app. Check balances, transfer money, deposit checks, and pay bills with just a few taps.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Mobile check deposit</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Instant payment notifications</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Biometric security login</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <img
                src="https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Mobile Banking App"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 lg:h-[500px]">
              <img
                src="https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Financial Planning"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#072146]">
                Personalized Financial Guidance
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of financial experts is here to help you achieve your goals. From retirement planning to investment strategies, we provide the guidance you need.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Shield className="text-[#1565C0]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#072146] mb-1">Expert Advisors</h3>
                    <p className="text-gray-600">Certified financial professionals at your service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Smartphone className="text-[#1565C0]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#072146] mb-1">Digital Tools</h3>
                    <p className="text-gray-600">Advanced analytics and planning resources</p>
                  </div>
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
              Complete Banking Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your financial life in one place
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Credit Cards"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072146]/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Credit Cards</h3>
                  <p className="text-blue-100">Rewards and cashback on every purchase</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Home Loans"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072146]/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Home Loans</h3>
                  <p className="text-blue-100">Competitive rates for your dream home</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Investments"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072146]/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Investments</h3>
                  <p className="text-blue-100">Grow your wealth with smart investing</p>
                </div>
              </div>
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
