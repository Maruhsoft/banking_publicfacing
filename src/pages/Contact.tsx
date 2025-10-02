import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useBankData } from '../hooks/useBankData';
import { useState } from 'react';

export function Contact() {
  const { t } = useLanguage();
  const bankData = useBankData();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  if (!bankData) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-[#072146] to-[#1565C0] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#072146] mb-8">
                {t('contact.getInTouch')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white border border-gray-200 p-6">
                  <div className="bg-blue-100 p-3 flex-shrink-0">
                    <Mail className="text-[#1565C0]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#072146] mb-1">Email</h3>
                    <a
                      href={`mailto:${bankData.contact.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {bankData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white border border-gray-200 p-6">
                  <div className="bg-blue-100 p-3 flex-shrink-0">
                    <Phone className="text-[#1565C0]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#072146] mb-1">Phone</h3>
                    <p className="text-gray-700">US: {bankData.contact.phone}</p>
                    <p className="text-gray-700">HK: {bankData.contact.hkPhone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white border border-gray-200 p-6">
                  <div className="bg-blue-100 p-3 flex-shrink-0">
                    <Clock className="text-[#1565C0]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#072146] mb-1">Hours</h3>
                    <p className="text-gray-700">24/7 Customer Support</p>
                    <p className="text-gray-700">Online Banking Available Anytime</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-[#072146] mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-full font-semibold transition-colors"
                >
                  {t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#072146] mb-8 text-center">
            {t('contact.offices')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="text-[#1565C0] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#072146] text-lg mb-2">
                    {t('contact.headquarters')} - USA
                  </h3>
                  <p className="text-gray-700 text-sm">{bankData.addresses.usHQ.address}</p>
                  <p className="text-gray-700 text-sm">
                    {bankData.addresses.usHQ.city}, {bankData.addresses.usHQ.state}{' '}
                    {bankData.addresses.usHQ.zipCode}
                  </p>
                  <p className="text-gray-700 text-sm">{bankData.addresses.usHQ.country}</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="text-[#1565C0] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#072146] text-lg mb-2">Hong Kong Office</h3>
                  <p className="text-gray-700 text-sm">{bankData.addresses.hongKong.address}</p>
                  <p className="text-gray-700 text-sm">
                    {bankData.addresses.hongKong.city}, {bankData.addresses.hongKong.region}
                  </p>
                  <p className="text-gray-700 text-sm">{bankData.addresses.hongKong.country}</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="text-[#1565C0] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#072146] text-lg mb-2">London Office</h3>
                  <p className="text-gray-700 text-sm">{bankData.addresses.london.address}</p>
                  <p className="text-gray-700 text-sm">
                    {bankData.addresses.london.city}, {bankData.addresses.london.postCode}
                  </p>
                  <p className="text-gray-700 text-sm">{bankData.addresses.london.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
