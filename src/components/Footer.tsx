import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBankData } from '../hooks/useBankData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();
  const bankData = useBankData();

  if (!bankData) return null;

  return (
    <footer className="bg-[#072146] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{bankData.bankName}</h3>
            <p className="text-blue-200 text-sm">{bankData.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('personal')}
                  className="hover:text-blue-300 transition-colors"
                >
                  {t('nav.personal')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('business')}
                  className="hover:text-blue-300 transition-colors"
                >
                  {t('nav.business')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-blue-300 transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-blue-300 transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-200">{t('services.checking')}</li>
              <li className="text-blue-200">{t('services.savings')}</li>
              <li className="text-blue-200">{t('services.creditCards')}</li>
              <li className="text-blue-200">{t('services.investments')}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('contact.getInTouch')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${bankData.contact.email}`}
                  className="hover:text-blue-300 transition-colors"
                >
                  {bankData.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span className="text-blue-200">{bankData.contact.phone}</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-blue-200">
                  {bankData.addresses.usHQ.address}, {bankData.addresses.usHQ.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-blue-200">
              &copy; {new Date().getFullYear()} {bankData.bankName}. {t('footer.allRights')}
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="hover:text-blue-300 transition-colors">
                {t('footer.privacy')}
              </button>
              <button className="hover:text-blue-300 transition-colors">
                {t('footer.terms')}
              </button>
              <button className="hover:text-blue-300 transition-colors">
                {t('footer.security')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
