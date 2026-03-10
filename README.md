# Web LAB Projesi (LAB-1 / LAB-2 / LAB-3)

## Hakkında
Bu repo, **Web Tasarımı ve Programlama** dersi kapsamında **Vite + React + TypeScript** kullanılarak geliştirilmiş tek sayfalık kişisel portföy uygulamasıdır.

- **LAB-1**: Ortam kurulumu, Git iş akışı, kişisel bilgilerin eklenmesi
- **LAB-2**: Semantik HTML, erişilebilirlik (a11y), iletişim formu
- **LAB-3**: Modern CSS, responsive layout (Flex/Grid), design tokens, ekran görüntüleri
- **LAB-4**: Tailwind CSS Entegrasyonu, Utility-first CSS, Component Yaklaşımı, Dark Mode, UI Kit

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
- [x] Tüm proje, Git `feature/tailwind-ui-kit` branch'inde komitlendi ve GitHub'a push edildi.

## Geliştirici
- **Ad Soyad:** Muhammed Eren Aydın
- **Öğrenci No:** 230541034
- **E-posta:** 230541034@firat.edu.tr

## Kullanılan Teknolojiler
- React 18
- TypeScript
- Vite
- Modern CSS (Flexbox, Grid, CSS Variables)

## Kurulum
```bash
npm install
```

## Çalıştırma
```bash
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

## Ekran Görüntüleri (LAB-3)
- `screenshots/screenshot-mobile.png` (375px)
- `screenshots/screenshot-tablet.png` (768px)
- `screenshots/screenshot-desktop.png` (1280px)

## Notlar
- **CSS kararları**: `CSS-KARARLARI.md`
- **Lighthouse raporu (varsa)**: `lighthouse-report.json`
