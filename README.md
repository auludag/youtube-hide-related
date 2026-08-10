# YouTube İlgili Videoları Gizle

YouTube izleme sayfasında sağ taraftaki önerilen (related) videoları **tamamen** gizleyen bir Brave / Chromium uzantısı. Liste bütünüyle kaldırıldığı için "Video removed" gibi boş kutucuklar da oluşmaz.

## Kurulum (Brave / Chrome)

1. Bu depoyu indirin veya klonlayın.
2. Adres çubuğuna `brave://extensions` (Chrome'da `chrome://extensions`) yazın.
3. Sağ üstten **Developer mode**'u açın.
4. **Load unpacked** deyip bu klasörü seçin.
5. Bir YouTube videosu açın; sağdaki öneri listesi görünmeyecektir.

## Dosyalar

- `manifest.json` — MV3 uzantı tanımı
- `hide-related.css` — ilgili videoları gizleyen stil
- `content.js` — SPA gezinmelerinde listeyi DOM'dan da kaldıran betik

## Lisans

MIT
