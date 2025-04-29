import React from 'react';
import { ThumbsUp } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Müşteri Yorumları</h2>
        {/* Memnuniyet Notu */}
        <div className="mt-12 text-center bg-slate-700 p-8 rounded-lg">
          <ThumbsUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Güvenilir Adli Bilişim Hizmeti</h3>
          <p className="text-gray-300">
            Dijital delil analizi ve veri kurtarma konusundaki uzmanlığımızla, 
            müşterilerimize en yüksek standartlarda hizmet sunuyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}