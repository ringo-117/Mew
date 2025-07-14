const modalBox = document.querySelector('.modal-box');
const modalBg = modalBox.querySelector('.modal-bg');
const modalCloseBtn = modalBox.querySelector('span');
const triggerTarget = document.querySelector('.modal-trigger-target');

let hasShownModal = false; // ★表示済みかどうかのフラグ

function openGeneralModal() {
  if (!hasShownModal) {
    modalBox.classList.add('show');
    hasShownModal = true; // ★1回表示したらフラグをON
    document.body.style.overflow = "hidden";
  }
}

function closeGeneralModal() {
  modalBox.classList.remove('show');
  document.body.style.overflow = "";
}

// IntersectionObserver：目印が見えたらモーダルを開く
const modalObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      openGeneralModal();
    }
  });
});

// 目印があれば監視開始
if (triggerTarget) {
  modalObserver.observe(triggerTarget);
}

// 閉じる処理（背景クリックや×ボタン）
modalBg.addEventListener('click', closeGeneralModal);
modalCloseBtn.addEventListener('click', closeGeneralModal);
