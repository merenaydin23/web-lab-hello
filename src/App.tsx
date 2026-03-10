import { useState, useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import UIKit from "./pages/UIKit";
import "./index.css";

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Git",
] as const;

type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  image: {
    src: string;
    alt: string;
  };
};

const PROJECTS: readonly Project[] = [
  {
    title: "AY-KA Hali Saha Otomasyonu",
    description: "Kullanıcıların tarih, saat, saha türü ve boyutuna göre boş sahaları arayıp anında rezervasyon yapmasını sağlayan otomasyon sistemi.",
    tags: ["C#", "SQL Server"],
    image: { src: "https://via.placeholder.com/400x200", alt: "AY-KA Hali Saha Otomasyonu" },
  },
  {
    title: "AI-Powered Academic Text Data Generator",
    description: "Cohere API ile belirli bir konu hakkında özgün akademik metinler üreten Python uygulaması.",
    tags: ["Python", "AI", "NLP"],
    image: { src: "https://via.placeholder.com/400x200", alt: "AI Data Generator" },
  },
  {
    title: "PDF Translator",
    description: "İngilizce PDF dosyalarını otomatik olarak Türkçeye çeviren Python uygulaması.",
    tags: ["Python", "LibreTranslate", "PDF Processing"],
    image: { src: "https://via.placeholder.com/400x200", alt: "PDF Translator" },
  },
] as const;

function App() {
  const [showUIKit, setShowUIKit] = useState(false);

  useEffect(() => {
    // Basic dark mode setup depending on OS initially
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  if (showUIKit) {
    return (
      <>
        <button
          onClick={() => setShowUIKit(false)}
          className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Portföye Dön
        </button>
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Tema degistir"
        >
          <span className="dark:hidden">&#9790;</span>
          <span className="hidden dark:inline">&#9728;</span>
        </button>
        <UIKit />
      </>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana icerige atla
      </a>

      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 sm:top-4 sm:bottom-auto z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Muhammed Eren Aydın
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkimda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Iletisim
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowUIKit(true)}
                  className="px-3 py-1 rounded-md text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-800 transition-colors font-medium"
                >
                  UI Kit
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkimda */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="https://via.placeholder.com/160"
                alt="Muhammed Eren Aydın vesikalik fotografi"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkimda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-center md:text-left">
                Merhaba! Web geliştirme dünyasına ilk adımımı atıyorum. Öğrenmeye ve gelişmeye açık bir yazılım meraklısıyım.
              </p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2">
                {SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="bg-blue-800 dark:bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <Card
                  key={project.title}
                  variant="elevated"
                  title={project.title}
                  image={project.image.src}
                  imageAlt={project.image.alt}
                >
                  <p className="mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Iletisim */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Iletisim
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajiniz
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600 transition-colors"
                ></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gonder
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm transition-colors">
        <p>&copy; 2025 Muhammed Eren Aydın. Tum haklari saklidir.</p>
      </footer>
    </div>
  );
}

export default App;
