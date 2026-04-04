import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection";
import "./index.css";

export default function App() {
  useEffect(() => {
    // Check OS preference only on initial load
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />
      
      {/* Dark mode toggle (Floating) */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 z-50 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border border-gray-100 dark:border-gray-700 backdrop-blur-md"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden text-lg">🌙</span>
        <span className="hidden dark:inline text-lg text-yellow-400">☀️</span>
      </button>

      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
