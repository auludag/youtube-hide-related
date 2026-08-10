// CSS zaten gizlemeyi yapıyor. Bu betik, YouTube tek sayfa uygulaması (SPA)
// olduğu ve içeriği dinamik yüklediği için ek güvence sağlar: sağ taraftaki
// ilgili videolar bölümünü DOM'dan da kaldırır.

(function () {
  "use strict";

  var SELECTORS = [
    "ytd-watch-next-secondary-results-renderer", // masaüstü ilgili videolar
    "ytm-watch-next-secondary-results-renderer"  // mobil web ilgili videolar
  ];

  function removeRelated() {
    for (var i = 0; i < SELECTORS.length; i++) {
      var nodes = document.querySelectorAll(SELECTORS[i]);
      for (var j = 0; j < nodes.length; j++) {
        nodes[j].remove();
      }
    }
  }

  // İlk çalıştırma
  removeRelated();

  // Sayfa değişimlerinde (video geçişleri) tekrar temizle
  var observer = new MutationObserver(function () {
    removeRelated();
  });

  function start() {
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
      removeRelated();
    } else {
      requestAnimationFrame(start);
    }
  }

  start();
})();
