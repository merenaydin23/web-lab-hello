export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Muhammed Eren Aydın. Tüm Hakları Saklıdır.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Github</a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
