# CSS Kararlari

## 1. Breakpoint Secimi
- 640px: Mobil ile tablet arasi gecis noktasi. Bu genislikten itibaren yatay navigasyon ve yatay "Hakkimda" duzeni devreye giriyor.
- 1024px: Masaustu genisligi. Proje kartlari 3 sutuna geciyor ve içerik max-width ile sinirlandiriliyor.
- İçeriğin bozulduğu noktalar esas alınarak belirlendi, belirli cihaz modellerine göre değil.

## 2. Layout Tercihleri
- **Header/Nav icin Flexbox:** Navigasyon tek boyutlu yatay/dikey hizalama gerektiriyor. Flexbox bu tur tek eksenli duzenler icin idealdir.
- **Proje kartlari icin Grid:** Kartlar 2 boyutlu bir izgara gerektiriyor (satir + sutun). Grid bu tur duzenlerde daha guclüdür.
- **auto-fit kullandim:** `repeat(auto-fit, minmax(280px, 1fr))` ile media query yazmadan responsive izgara elde ettim. `auto-fit`, bos sutunlari daraltarak mevcut kartlarin genislemesinę izin verir.

## 3. Design Tokens
- **Renk paleti:** Koyu lacivert (`#1E3A8A`) ve mavi (`#2563EB`) ana renkler olarak secildi. Yuksek kontrast ve profesyonel bir goruntu sagliyor.
- **Spacing skalasi:** 4px tabanlı bir skala (xs=4px, sm=8px, md=16px...) kullandim. Tutarli bosluklari merkezi bir yerde yönetmek bakimi kolaylastiriyor.
- **Fluid typography:** `clamp(min, preferred, max)` ile belirlendi. `preferred` degerinde `rem + vw` kombinasyonu kullanildi. Yalniz `vw` kullaniminin erisilebilirlik sorununa yol actigi icin karisik birim tercih edildi.

## 4. Responsive Stratejiler
- **Mobile-first:** Tum CSS once mobil (dar ekran) icin yazildi. Buyuk ekranlar icin `min-width` media query`leri ile ozellikler eklendi.
- **Değisen elemanlar:** Header (dikey→yatay), "Hakkimda" duzeni (dikey→yatay), proje kartlari (1 sutun→auto-fit→3 sutun), buton genisligi (tam sagfa→otomatik genislik).
- **Gorsel boyutlari:** `max-width: 100%` ve `height: auto` ile gorseller kapsayicisina gore ölçekleniyor. Proje karti gorselleri `object-fit: cover` ile sabit yukseklikte tutuluyor.
