// 'use strict';

// // ハンバーガーメニューとスクロール制御
// {
// 	const btn = document.querySelector('.btn');
// 	const container = document.querySelector('.container');
// 	const header = document.querySelector('.header');
// 	const logo = document.querySelector('.logo-box');

// 	btn.addEventListener('click', () => {
// 		btn.classList.toggle('active');
// 		container.classList.toggle('active');
// 		header.classList.toggle('active');
// 		logo.classList.toggle('active');

// 		// ボディのスクロール制御
// 		const bodyStyle = document.body.style;
// 		if (bodyStyle.overflow === "hidden") {
// 			bodyStyle.overflow = "";
// 			bodyStyle.height = "";
// 		} else {
// 			bodyStyle.overflow = "hidden";
// 			bodyStyle.height = "100%";
// 		}
// 	});
// }

// // メニューリンクをクリック時、メニューを閉じる
// $('#nav_list a[href]').on('click', function() {
//     $('.btn').trigger('click');
// });


// // フェードアップ
// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('.sec-top').classList.add('fade-up');
// });



// // スクロール出現アニメーション
// document.addEventListener('DOMContentLoaded', () => {
// 	const targets = document.querySelectorAll('.effect');

// 	const observer = new IntersectionObserver((entries) => {
// 		entries.forEach(entry => {
// 			if (entry.isIntersecting) {
// 				entry.target.classList.add('show');
// 				// 一度表示されたら監視をやめる（繰り返し表示したいならこの行を削除）
// 				observer.unobserve(entry.target);
// 			}
// 		});
// 	}, {
// 		threshold: 0.1 // 要素が10%以上見えたら発火
// 	});

// 	targets.forEach(target => {
// 		observer.observe(target);
// 	});
// });



// // スクロール（別ページ_リンク画像）
// document.addEventListener('DOMContentLoaded', () => {
//     // 共通：ズーム対象（画像）とテキストのエフェクト対象をまとめて
//     const targets = document.querySelectorAll('.effect, .zoom-img, .fade-right');

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show');
//           observer.unobserve(entry.target); // 一度表示されたら監視終了
//         }
//       });
//     }, {
//       threshold: 0.2
//     });

//     targets.forEach(target => {
//       observer.observe(target);
//     });
//   });



'use strict';

// =============================
// ハンバーガーメニューとスクロール制御
// =============================
{
  const btn = document.querySelector('.btn');
  if (btn) {
    const container = document.querySelector('.container');
    const header   = document.querySelector('.header');
    const logo     = document.querySelector('.logo-box');

    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      container?.classList.toggle('active');
      header?.classList.toggle('active');
      logo?.classList.toggle('active');

      // ボディのスクロール制御
      const bodyStyle = document.body.style;
      if (bodyStyle.overflow === 'hidden') {
        bodyStyle.overflow = '';
        bodyStyle.height   = '';
      } else {
        bodyStyle.overflow = 'hidden';
        bodyStyle.height   = '100%';
      }
    });

    // メニューリンクをクリックしたらメニューを閉じる（jQuery）
    $('#nav_list a[href]').on('click', () => {
      $('.btn').trigger('click');
    });
  }
}

// =============================
// ロード時：トップセクションをフェードアップ
// =============================
window.addEventListener('DOMContentLoaded', () => {
  const secTop = document.querySelector('.sec-top');
  if (secTop) {
    secTop.classList.add('fade-up');
  }
});

// =============================
// スクロール出現アニメーション
// =============================
// .effect  : 下からフェードアップ
// .zoom-img: 拡大→通常サイズ
// .fade-right: 右からフェードイン
// 追加したいクラスがあれば selector に追記
// =============================
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.effect, .zoom-img, .fade-right');
  if (targets.length === 0) return; // 対象がなければ何もしない

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target); // 一度表示されたら監視終了
      }
    });
  }, {
    threshold: 0.2 // 20% 見えたら発火
  });

  targets.forEach(target => observer.observe(target));
});


// LINE表示
// window.addEventListener('scroll', function () {
// 	const lineBox = document.getElementById('lineBox');
// 	const scrollY = window.scrollY || window.pageYOffset;
// 	const width = window.innerWidth;
// 	const path = location.pathname;

// 	let showStart = 0;
// 	let showEnd = 0;

// 	// 📱 スマホサイズ
// 	if (width <= 640) {
// 		if (path.includes('index')) {
// 			showEnd = 2000;
// 		}else if (path.includes('system')) {
// 			showEnd = 1650;
// 		}else if (path.includes('menu')) {
// 			showEnd = 1200;
// 		}else if (path.includes('faq')) {
// 			showEnd = 500;
// 		}else {
// 			showStart = 150;
// 			showEnd = 1800;
// 		}
// 	}
// 	// 💻 タブレットサイズ
// 	else if (width <= 1024) {
// 		if (path.includes('about')) {
// 			showStart = 400;
// 			showEnd = 1500;
// 		} else {
// 			showStart = 500;
// 			showEnd = 1400;
// 		}
// 	}
// 	// 🖥️ PCサイズ
// 	else {
// 		if (path.includes('contact')) {
// 			showStart = 600;
// 			showEnd = 2000;
// 		} else {
// 			showStart = 800;
// 			showEnd = 1800;
// 		}
// 	}

// 	// 表示・非表示の切り替え
// 	if (scrollY > showStart && scrollY < showEnd) {
// 		lineBox.classList.add('show');
// 	} else {
// 		lineBox.classList.remove('show');
// 	}
// });






const lineBox = document.getElementById('lineBox');
const endTarget = document.querySelector('.end-target');

let endVisible = false;

// 画面サイズごとのスクロール開始位置（px）
function getShowStart() {
	const width = window.innerWidth;

	if (width <= 640) {
		return 150; // スマホ
	} else if (width <= 1024) {
		return 150; // タブレット
	} else {
		return 300; // PC
	}
}

function handleScroll() {
	const scrollY = window.scrollY || window.pageYOffset;
	const showStart = getShowStart(); // サイズに応じて取得

	if (scrollY > showStart && !endVisible) {
		lineBox.classList.add('show');
	} else {
		lineBox.classList.remove('show');
	}
}

// IntersectionObserver：目印が見えたら非表示
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		endVisible = entry.isIntersecting;
		handleScroll(); // 状態が変わったら再判定
	});
});

if (endTarget) {
	observer.observe(endTarget);
}

// スクロールで常にチェック
window.addEventListener('scroll', handleScroll);

// リサイズされたときにもチェック（スマホ←→PC切替対応）
window.addEventListener('resize', handleScroll);

// 初回実行
handleScroll();

