import Button from "../ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="text-center max-w-2xl transform transition-transform hover:scale-[1.01] duration-500">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 tracking-wider uppercase text-sm">
          Merhaba, ben
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Muhammed Eren Aydın
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto">
          Yenilikçi Web Deneyimleri İnşa Eden <span className="text-blue-600 border-b-2 border-blue-600">Frontend Developer</span>
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects">
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-blue-500/20 active:scale-95 transition-transform">
              Projelerimi Gör
            </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" size="lg" className="rounded-full px-8 active:scale-95 transition-transform">
              İletişime Geç
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
