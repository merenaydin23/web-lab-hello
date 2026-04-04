import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            İletişime Geçin
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-lg mx-auto">
            Sorularınız, projeleriniz veya sadece sohbet etmek için bana dilediğiniz zaman yazabilirsiniz.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
