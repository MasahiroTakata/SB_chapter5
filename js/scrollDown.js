window.onload = function (){
  const fadeInTarget = document.querySelectorAll('.fade-in');
  
  window.addEventListener('scroll', () => { // スクロールした時にイベント発生
    for (let i = 0; i < fadeInTarget.length; i++){
      const rect = fadeInTarget[i].getBoundingClientRect().top; // 画面内における要素の位置座標を取得
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
  
      if (scroll > offset - windowHeight + 150) {
        fadeInTarget[i].classList.add('scroll-in');
      }
    }
  });
};