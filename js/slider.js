const swiper = new Swiper(".swiper", {
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  // 自動再生の設定
  autoplay: {
    delay: 3000, // 3秒ごとに切り替え
    disableOnInteraction: false // ユーザー操作後も止まらない
  },

  // ループさせる（無限ループ）
  loop: true,

  // スライドの切り替えアニメーション（デフォルトは slide）
  effect: 'slide',

  // アニメーション速度（ミリ秒）
  speed: 800,
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});