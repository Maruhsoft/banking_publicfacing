import { CreditCard, PiggyBank, Wallet, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBankData } from '../hooks/useBankData';

export function Personal() {
  const { t } = useLanguage();
  const bankData = useBankData();

  if (!bankData) return null;

  const handleOpenAccount = () => {
    window.location.href = bankData.externalUrls.signup;
  };

  const products = [
    {
      icon: CreditCard,
      title: t('personal.checking.title'),
      description: t('personal.checking.desc'),
      features: [
        'No monthly maintenance fees',
        'Free online and mobile banking',
        'Unlimited transactions',
        'Overdraft protection available',
      ],
    },
    {
      icon: PiggyBank,
      title: t('personal.savings.title'),
      description: t('personal.savings.desc'),
      features: [
        'Competitive interest rates',
        'No minimum balance required',
        'Easy transfers between accounts',
        'FDIC insured up to $250,000',
      ],
    },
    {
      icon: Wallet,
      title: t('personal.credit.title'),
      description: t('personal.credit.desc'),
      features: [
        'Up to 3% cashback on purchases',
        'No annual fee options',
        'Travel rewards and benefits',
        'Fraud protection guarantee',
      ],
    },
    {
      icon: TrendingUp,
      title: t('personal.loans.title'),
      description: t('personal.loans.desc'),
      features: [
        'Fixed and variable rates',
        'Flexible repayment terms',
        'Quick approval process',
        'No prepayment penalties',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-[#072146] to-[#1565C0] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('personal.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('personal.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3">
                      <product.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {product.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleOpenAccount}
                    className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-full font-semibold transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#072146] mb-4">
                Special Offer: $250 Bonus
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Open a new checking account and qualifying savings account to receive a $250 cash bonus. Limited time offer.
              </p>
              <button
                onClick={handleOpenAccount}
                className="bg-[#F58220] hover:bg-[#e67617] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg"
              >
                {t('nav.openAccount')}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Terms and conditions apply. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
