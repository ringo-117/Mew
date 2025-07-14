const openBtn = document.querySelector(".modal-open-movie");
const modal = document.querySelector(".modal-movie");
const iframe = modal.querySelector("iframe");
const closeBtn = modal.querySelector("span");
const bg = modal.querySelector(".movie-bg");

openBtn.onclick = () => {
  modal.style.display = "block";
  iframe.style.display = "block";

  let baseSrc = iframe.dataset.src || iframe.src;
  baseSrc = baseSrc.replace("?autoplay=1", "").replace("&autoplay=1", "");

  iframe.src = "";
  iframe.src = baseSrc + (baseSrc.includes("?") ? "&" : "?") + "autoplay=1";

  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  iframe.style.display = "none";
  const src = iframe.src;
  iframe.src = "";
  iframe.src = src.replace("&autoplay=1", "");

  document.body.style.overflow = "";
};

closeBtn.onclick = closeModal;
bg.onclick = closeModal;


// 動画モーダル用：関数名を変更
// const openVideoBtn = document.querySelector(".modal-open-movie");
// const videoModal = document.querySelector(".modal-movie");
// const videoIframe = videoModal.querySelector("iframe");
// const videoCloseBtn = videoModal.querySelector("span");
// const videoBg = videoModal.querySelector(".movie-bg");

// openVideoBtn.onclick = () => {
//   videoModal.classList.add("show");

//   let baseSrc = videoIframe.dataset.src || videoIframe.src;
//   baseSrc = baseSrc.replace("?autoplay=1", "").replace("&autoplay=1", "");

//   videoIframe.src = "";
//   videoIframe.src = baseSrc + (baseSrc.includes("?") ? "&" : "?") + "autoplay=1";

//   document.body.style.overflow = "hidden";
// };

// const closeVideoModal = () => {
//   videoModal.classList.remove("show");

//   const src = videoIframe.src;
//   videoIframe.src = "";
//   videoIframe.src = src.replace("&autoplay=1", "");

//   document.body.style.overflow = "";
// };

// videoCloseBtn.onclick = closeVideoModal;
// videoBg.onclick = closeVideoModal;
