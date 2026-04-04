export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="https://via.placeholder.com/300"
            alt="Profile portrait"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
            Hakkımda
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              Modern web teknolojilerine olan tutkum, kullanıcıların hayatını kolaylaştıran dijital çözümler üretmemi sağlıyor. React ve TypeScript ekosisteminde uzmanlaşarak temiz, sürdürülebilir ve performanslı kod yazmayı hedefliyorum.
            </p>
            <p>
              Sadece kod yazmakla kalmıyor, aynı zamanda kullanıcı deneyimi (UX) ve erişilebilirlik (a11y) standartlarını projelerimde ön planda tutuyorum. Her yeni proje, problem çözme yeteneğimi bir adım öteye taşıyan yeni bir serüven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
