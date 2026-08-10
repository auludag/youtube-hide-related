# YouTube İlgili Videoları Gizle

YouTube izleme sayfasında sağ taraftaki önerilen (related) videoları **tamamen** gizleyen bir Brave / Chromium uzantısı. Liste bütünüyle kaldırıldığı için "Video removed" gibi boş kutucuklar da oluşmaz.

## Kurulum (Brave / Chrome)

Uzantı henüz mağazada olmadığı için "paketlenmemiş uzantı" (unpacked) olarak yüklenir. Adımlar:

1. **Dosyaları indirin.**
   Bu depo sayfasında yeşil **Code** düğmesine tıklayın → **Download ZIP**.
   ([Doğrudan bağlantı](https://github.com/auludag/youtube-hide-related/archive/refs/heads/main.zip))

2. **ZIP'i çıkarın.**
   İndirdiğiniz `youtube-hide-related-main.zip` dosyasını sağ tıklayıp bir klasöre çıkarın. İçinde `manifest.json`, `hide-related.css` ve `content.js` dosyalarının bulunduğu klasörü not edin.

3. **Uzantılar sayfasını açın.**
   Adres çubuğuna Brave'de `brave://extensions`, Chrome'da `chrome://extensions` yazıp Enter'a basın.

4. **Geliştirici modunu açın.**
   Sayfanın sağ üstündeki **Developer mode** (Geliştirici modu) anahtarını etkinleştirin.

5. **Uzantıyı yükleyin.**
   **Load unpacked** (Paketlenmemiş yükle) düğmesine tıklayın ve 2. adımda çıkardığınız klasörü seçin.

6. **Test edin.**
   Herhangi bir YouTube videosu açın. Sağ taraftaki önerilen videolar listesi görünmeyecektir.

> Not: Uzantı yalnızca YouTube izleme sayfasındaki **sağ kenar çubuğu** önerilerini gizler; video oynatıcı, yorumlar ve açıklama olduğu gibi kalır.

## Güncelleme

Depo güncellendiğinde yeni ZIP'i indirip klasörün üzerine yazın, ardından `brave://extensions` sayfasında uzantının **yenile** (↻) simgesine tıklayın.

## Kaldırma

`brave://extensions` sayfasında uzantıyı bulup **Remove** (Kaldır) deyin.

## Dosyalar

- `manifest.json` — MV3 uzantı tanımı
- `hide-related.css` — ilgili videoları gizleyen stil
- `content.js` — SPA gezinmelerinde listeyi DOM'dan da kaldıran betik

## Lisans

MIT
