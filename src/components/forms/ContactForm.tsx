import { useState, type FormEvent } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  function validate(data: ContactFormData): FormErrors {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = "Ad soyad zorunludur.";
    else if (data.name.trim().length < 2) newErrors.name = "Ad soyad en az 2 karakter olmalıdır.";

    if (!data.email.trim()) newErrors.email = "E-posta zorunludur.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "Geçerli bir e-posta adresi giriniz.";

    if (!data.subject.trim()) newErrors.subject = "Konu zorunludur.";
    if (!data.message.trim()) newErrors.message = "Mesaj zorunludur.";
    else if (data.message.trim().length < 10) newErrors.message = "Mesaj en az 10 karakter olmalıdır.";

    return newErrors;
  }

  function handleChange(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form verisi:", formData);
      setSubmitSuccess(true);
      setFormData(initialFormData);
    } catch {
      alert("Gönderim başarısız. Tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center animate-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
        <p className="text-green-800 dark:text-green-300 font-bold mb-2 text-xl">Mesajınız başarıyla gönderildi!</p>
        <p className="text-green-600 dark:text-green-400 mb-6">En kısa sürede size geri dönüş yapacağız.</p>
        <Button onClick={() => setSubmitSuccess(false)} variant="ghost" className="text-green-600 dark:text-green-400 underline">
          Yeni mesaj gönder
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto" noValidate>
      <Input
        id="name"
        label="Ad Soyad"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={errors.name}
        placeholder="Adınız Soyadınız"
      />
      <Input
        id="email"
        label="E-posta"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email}
        placeholder="ornek@mail.com"
      />
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Konu
        </label>
        <select
          id="subject"
          group-aria-label="Konu filtresi"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none dark:bg-gray-800 dark:text-white ${
            errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-700"
          }`}
        >
          <option value="">Konu seçiniz...</option>
          <option value="genel">Genel</option>
          <option value="destek">Teknik Destek</option>
          <option value="oneri">Öneri</option>
          <option value="isbirligi">İş Birliği</option>
        </select>
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Mesaj
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none dark:bg-gray-800 dark:text-white min-h-[120px] ${
            errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"
          }`}
          placeholder="Mesajınızı detaylandırın..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full py-4 text-lg shadow-blue-500/10 shadow-xl active:scale-95">
        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
      </Button>
    </form>
  );
}
