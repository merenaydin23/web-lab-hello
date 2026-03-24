# Web LAB Projesi (LAB-1 / LAB-2 / LAB-3 / LAB-4 / LAB-5)

## Hakkında
Bu repo, **Web Tasarımı ve Programlama** dersi kapsamında **Vite + React + TypeScript** kullanılarak geliştirilmiş web uygulamasıdır.

- **LAB-1**: Ortam kurulumu, Git iş akışı, kişisel bilgilerin eklenmesi
- **LAB-2**: Semantik HTML, erişilebilirlik (a11y), iletişim formu
- **LAB-3**: Modern CSS, responsive layout (Flex/Grid), design tokens, ekran görüntüleri
- **LAB-4**: Tailwind CSS Entegrasyonu, Utility-first CSS, Component Yaklaşımı, Dark Mode, UI Kit
- **LAB-5**: Modern JavaScript/TypeScript Temelleri, ESModules, DOM yerine State Mantığı, Fetch API ve Filtreleme/Sıralama İşlemleri

## LAB-5 Görevleri (Tamamlananlar)
- [x] TypeScript tipleri (Project, Category, FilterState vb.) tanımlandı.
- [x] JSON veri dosyası (public/data/projects.json) mock projeler içererek projeye dahil edildi.
- [x] Fetch API kullanılarak mock datadan veriler asenkron çekildi.
- [x] try/catch blokları ile veri çekme hata yönetimi yapıldı.
- [x] Veri çekilirken "Yükleniyor" (loading) state'i eklendi.
- [x] Başlık veya description içinde arama (search) filtresi eklendi.
- [x] "all", "frontend", "fullstack", "backend" gibi kategori tabanlı filtreleme işlemi eklendi.
- [x] Yıla (year) ve başlığa (title) göre asc/desc sıralama (sort) işlemi yapıldı.
- [x] Kod; types, services, utils ve componentler olmak üzere daha modüler hale getirildi.
- [x] Arayüzdeki (UI) her şey React `useState` kullanılarak "State" üzerinden render edildi.
- [x] Git iş akışı uygulanarak tüm adımlar commitlendi ve `feature/typescript-projects` branch'ine push edildi.

## LAB-4 Görevleri (Tamamlananlar)
- [x] Tailwind CSS v4 kurulu ve Vite konfigürasyonu yapıldı.
- [x] `@theme` ile özel renk/font (design tokens) eklendi.
- [x] Responsive layout için `sm:`, `md:`, `lg:` prefixleri eklendi.
- [x] Dark mode (`dark:`) desteği eklendi, toggle butonu konuldu.
- [x] **Button Component** üretildi (primary, secondary, danger, ghost + boyutlar + disabled).
- [x] **Input Component** üretildi (normal, disabled, helpText, hata durumu).
- [x] **Card Component** üretildi (elevated, outlined, filled).
- [x] **Alert Component** üretildi (info, success, warning, error + dismissible).
- [x] Ana sayfa (Portföy) bütünüyle Tailwind CSS'e geçirildi.
- [x] **UI Kit Sayfası** (`src/pages/UIKit.jsx`) eklendi ve 8+ component varyantı sergilendi.

## Geliştirici
- **Ad Soyad:** Muhammed Eren Aydın
- **Öğrenci No:** 230541034
- **E-posta:** 230541034@firat.edu.tr

## Kullanılan Teknolojiler
- React 18
- TypeScript
- Vite
- Modern CSS & Tailwind CSS

## Kurulum
```bash
npm install
```

## Çalıştırma
```bash
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

## Notlar
- **CSS kararları**: `CSS-KARARLARI.md`
- **Lighthouse raporu (varsa)**: `lighthouse-report.json`
