import React from 'react';
import { PlayCircle, Users, FileText, Brain, Percent, Bell, Download, Shield, Check, Wand2 } from 'lucide-react';

const features = [
  {
    icon: <PlayCircle className="w-6 h-6" />,
    text: 'Ses Çalma ve Durdurma: Kaydınızı dilediğiniz an oynatın veya durdurun.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    text: 'Konuşmacı Ayırma: Birden fazla konuşmacıyı ayırt ederek metne dökün.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    text: "Word'e Kaydetme: Oluşturduğunuz metni kolayca kaydedin veya kopyalayın.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    text: 'Yapay Zeka Destekli Ses Dökümü: En son AI teknolojisi ile ses kayıtlarınızı metne dönüştürün.',
  },
  {
    icon: <Percent className="w-6 h-6" />,
    text: '%99\'a Varan Doğruluk Oranı: Yüksek doğruluk oranı ile güvenilir transkripsiyon.',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    text: 'İngilizce ses dosyayalarını hızlı bir şekilde Türçe dilinde metne dönüştürün.',
  },
];

export default function ForensicSoftware() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Bell className="w-6 h-6 text-green-400 animate-bounce" />
            <span className="text-green-400 font-semibold text-lg bg-green-400/10 px-4 py-1 rounded-full">Yeni!</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ses Döküm Pro
          </h2>
          <div className="flex items-center justify-center mb-8">
            <Wand2 className="w-8 h-8 text-blue-400 mr-3" />
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              <span className="text-blue-400 font-medium">Saniyeler içinde</span> ses kayıtlarınızı metne dönüştürün
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-600">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="p-12 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
              
              <div className="relative group z-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img
                  src="/sesdokum-pro-logo.png"
                  alt="Ses Döküm Pro Logo"
                  className="relative w-[420px] h-auto rounded-lg transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-12">
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Yapay zeka teknolojisiyle desteklenen uygulamamız sayesinde konuşmaları
                hızlı, doğru ve zahmetsiz bir şekilde metne dönüştürebilirsiniz.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="text-blue-400 p-2 bg-blue-400/10 rounded-lg">{feature.icon}</div>
                    <p className="text-gray-300 text-lg">{feature.text}</p>
                  </div>
                ))}
              </div>

              {/* Güvenlik Açıklamaları */}
              <div className="mb-12 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <h4 className="text-xl font-bold text-white">Ses Dosyalarının Gizliliği ve Güvenliği</h4>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Geçici Veri Saklama: Ses dosyaları işlem sonrası otomatik silinir</span>
                  </li>
                  <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>Şifreli Aktarım: Endüstri standardı güvenlik protokolleri</span>
                  </li>
                  <li className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>SOC 2 Type 2 Sertifikalı Altyapı</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://sesdokumpro.hyforensic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 w-full justify-center text-lg font-medium"
              >
                <Download className="w-6 h-6 mr-3" />
                Ses Döküm Pro'yu Hemen İndir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
