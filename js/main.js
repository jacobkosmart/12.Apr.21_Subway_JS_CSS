// Gsap 좌측 badges가 scroll 시 없어지게 만드는 기능임
const badgeEl = document.querySelector('header .badges')
const toToEl = document.querySelector('#to-top')

// _.thorottle(함수, 시간) 
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간(s), 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 버튼 보이기!
    gsap.to(toToEl, .2, {
      x: 0
    })
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 버튼 숨기기 !
    gsap.to(toToEl, .2, {
      x: 100
    })
  } 
}, 300))
// _.trottle(함수, 시간)
toToEl.addEventListener('click', function () {
  gsap.to(window, .7, { // window 객체를 통해서 화면 자체를 나타내는거 .7 초 시간동안
    scrollTo: 0 // 0으로 두면 화면이 0px 있는 지점으로 이동 .7초 동안
  })
})




// 순차적 보이기
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(s), 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  })
})

//공지사항 vertical slider
// Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', //방향 수직이동
  autoplay: true, // 자동재생 플레이
  loop: true, // 무한반복
})

// Promotion slide
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})
// Awards slide
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true, 
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})


// 슬라이드 영역 토글
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // 지속적으로 코드를 반대값으로 변환 시킬수 있는 코드임 
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide')
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide')
  }
})


// floting 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()를 통해 반환된 문자 데이터를,`
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이토로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// floting 반복 에니메이션
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size, //y 축으로 얼마나 움직이느냐를 나타내는거
    repeat: -1, // 에니메이션 무한 반복
    yoyo: true, // 다시 뒤로 재생해서 다시 올라가는 기능
    ease: Power1.easeInOut, // 재생속도를 조절 easing 함수 페이지 참조 https://greensock.com/docs/v2/Easing
    delay: random(0, delay) // 지연시간 옵션
  })
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)


// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // .8 개념 (뷰포트에서 80%내려 왔을때 trigger 시작이 된다는거임.)
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})










