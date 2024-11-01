
// pages/home.tsx

"use client";

import React from "react";

const Home: React.FC = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-500 h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">مرحبًا بكم في منصة الدعم التعليمي</h1>
        <p className="text-white text-lg max-w-md mx-auto">
          نوفر تجربة تعلم ودعم مصممة خصيصًا للأشخاص الذين يعانون من عسر القراءة واضطراب فرط الحركة وتشتت الانتباه.
        </p>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">عن المنصة</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          نسعى لتقديم بيئة تعليمية تفاعلية تساعد الأطفال وأولياء الأمور على تعزيز التركيز وتحسين المهارات. يتم تصميم الألعاب والأنشطة خصيصًا لتلبية احتياجات الأشخاص المصابين بـعسر القراءة و ADHD.
        </p>
      </section>

      {/* Games Section */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">الألعاب التعليمية</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          اختبر ألعابًا تعليمية فريدة تساعد الأطفال على تطوير مهاراتهم بطريقة ممتعة وسهلة الاستيعاب.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          استكشاف الألعاب
        </button>
      </section>

      {/* Support Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">الدعم والتواصل</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          تواصل معنا للحصول على دعم أو تقديم استفساراتك، فريقنا جاهز للمساعدة.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
          تواصل الآن
        </button>
      </section>

      {/* ADHD Section */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">دعم لمرضى اضطراب فرط الحركة</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          وفرنا محتوى وأدوات تساعد مرضى الـ ADHD على التركيز وتطوير مهاراتهم بشكل فعال ومرح.
        </p>
        <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition">
          اكتشف المزيد
        </button>
      </section>

      {/* Dyslexia Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">دعم لمرضى عسر القراءة</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          نقدم أدوات خاصة للتدرب على القراءة والفهم بأسلوب تفاعلي يحاكي بيئة التعلم المثلى.
        </p>
        <button className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition">
          المزيد عن أدوات القراءة
        </button>
      </section>
      
    </div>
  );
};

export default Home;