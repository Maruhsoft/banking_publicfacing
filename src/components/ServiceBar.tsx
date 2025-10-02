import { CreditCard, PiggyBank, Home, TrendingUp, Briefcase, Smartphone, Wallet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServiceBarProps {
  onNavigate?: (page: string) => void;
}

export function ServiceBar({ onNavigate }: ServiceBarProps) {
  const { t } = useLanguage();

  const services = [
    { icon: CreditCard, label: t('services.checking'), page: 'checking' },
    { icon: PiggyBank, label: t('services.savings'), page: 'savings' },
    { icon: CreditCard, label: t('services.creditCards'), page: 'credit' },
    { icon: Wallet, label: t('services.cards'), page: 'cards' },
    { icon: Home, label: t('services.mortgages'), page: 'mortgages' },
    { icon: TrendingUp, label: t('services.investments'), page: 'investments' },
    { icon: Briefcase, label: t('services.specialty'), page: 'specialty' },
    { icon: Smartphone, label: t('services.digital'), page: 'digital' },
  ];

  return (
    <div className="bg-[#1565C0] text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto space-x-6 md:space-x-8 scrollbar-hide">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => onNavigate?.(service.page)}
              className="flex items-center space-x-2 whitespace-nowrap hover:text-blue-200 transition-colors flex-shrink-0"
            >
              <service.icon size={18} />
              <span className="text-sm">{service.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
