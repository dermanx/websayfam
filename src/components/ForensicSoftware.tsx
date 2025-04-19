import React from 'react';
import { PlayCircle, Users, FileText, Brain, Percent, Bell, Download } from 'lucide-react';

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
];

export default function ForensicSoftware() {
  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Adli Bilişim Programları
        </h2>

        <div className="bg-slate-700 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="p-8 flex items-center justify-center">
              <img
                src="/sesdokum-pro-logo.png"
                alt="Ses Döküm Pro Logo"
                className="w-96 h-auto rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">Yeni!</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ses Döküm Pro
              </h3>
              <p className="text-gray-300 mb-6">
                Ses kayıtlarınızı saniyeler içinde yazıya döken güçlü ve
                kullanıcı dostu bir transkripsiyon aracıdır. Yapay zeka
                teknolojisiyle desteklenen uygulamamız sayesinde konuşmaları
                hızlı, doğru ve zahmetsiz bir şekilde metne dönüştürebilirsiniz.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 text-gray-300"
                  >
                    <div className="text-blue-400 mt-1">{feature.icon}</div>
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://sesdokumpro.hyforensic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Ses Döküm Pro'yu Hemen İndir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
