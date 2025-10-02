import { GraduationCap, Users, Heart, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Specialty() {
  const { t } = useLanguage();

  const programs = [
    {
      name: t('specialty.student.name'),
      description: t('specialty.student.desc'),
      features: [
        t('specialty.student.feature1'),
        t('specialty.student.feature2'),
        t('specialty.student.feature3'),
        t('specialty.student.feature4'),
      ],
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('specialty.military.name'),
      description: t('specialty.military.desc'),
      features: [
        t('specialty.military.feature1'),
        t('specialty.military.feature2'),
        t('specialty.military.feature3'),
        t('specialty.military.feature4'),
      ],
      icon: <Award className="w-12 h-12 text-blue-600" />,
    },
    {
      name: t('specialty.senior.name'),
      description: t('specialty.senior.desc'),
      features: [
        t('specialty.senior.feature1'),
        t('specialty.senior.feature2'),
        t('specialty.senior.feature3'),
        t('specialty.senior.feature4'),
      ],
      icon: <Heart className="w-12 h-12 text-blue-600" />,
    },
  ];

  const community = [
    {
      title: t('specialty.community.title1'),
      description: t('specialty.community.desc1'),
      icon: <Users className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('specialty.community.title2'),
      description: t('specialty.community.desc2'),
      icon: <Heart className="w-8 h-8 text-[#F58220]" />,
    },
    {
      title: t('specialty.community.title3'),
      description: t('specialty.community.desc3'),
      icon: <GraduationCap className="w-8 h-8 text-[#F58220]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">{t('specialty.title')}</h1>
          <p className="text-xl text-gray-100 max-w-3xl">{t('specialty.subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-6">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#072146]">{program.name}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#F58220] hover:bg-[#e67617] text-white py-3 rounded-lg font-semibold transition-colors">
                  {t('specialty.learnMore')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#072146]">
            {t('specialty.communityTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {community.map((item, index) => (
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
    </div>
  );
}
