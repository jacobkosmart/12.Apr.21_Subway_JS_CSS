[![Netlify Status](https://api.netlify.com/api/v1/badges/4ecc6bac-a7f3-40a6-b4c2-b5b8ca27b50b/deploy-status)](https://app.netlify.com/sites/hardcore-dijkstra-7a109c/deploys)

# 🌮 Subway 

[DEMO](https://hardcore-dijkstra-7a109c.netlify.app/)

![image](https://user-images.githubusercontent.com/28912774/117537340-32fe0780-b03b-11eb-8d2c-41bef928759c.png)


 

## 뷰포트(Viewport) 렌더링 방식 설정  

웹페이지가 화면(Viewport)에 표현되는 방식을 설정합니다.<br>

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- `width=device-width`: 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
- `initial-scale=1.0`: 화면의 초기 화면 배율(확대 정도)을 설정
- `user-scalable=no`: 사용자가 디바이스 화면을 확대(`yes`)/축소(`no`)할 수 있는지 설정
- `maximum-scale=1`: 사용자가 화면을 확대할 수 있는 최댓값
- `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값

[About the Open Graph Protocol](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)


 

## 오픈 그래프(The Open Graph protocol)
웹페이지가 SNS (페이스북, 인스타그램 등), 메신저(카카오톡, 라인 등)으로 공유될때 우선적으로 나타나는 정보를 지정합니다.

카카오톡 ->  

![kakaotal example](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8672ac43-31aa-4f33-99a0-6885dc6bd489/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210414T104929Z&X-Amz-Expires=86400&X-Amz-Signature=aa1e986c33b6001af91eb7233b2902a19e53e14cbc64a8bcbddd32ce588ae147&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Subway" />
<meta property="og:title" content="Subway Korea" />
<meta property="og:description" content="신선하고 건강한 글로벌 NO.1 샌드위치 브랜드, 써브웨이" />
<meta property="og:image" content="./images/logo.png" />
```
[About the Open Graph Protocol](https://ogp.me/)

 

## Favicon(파비콘, favorites icon)

웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.<br>
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />` 를 작성할 필요가 없습니다.

> 파비콘 이미지는 루트 경로에 있어야 합니다!

```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```

### .ico 파일 변환 (.png to .ico)

[iconifier](https://iconifier.net/)

 

## Reset.css
각 브라우저에 default css style 을 초기화 합니다.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```
[About jsdelivr reset-css](https://www.jsdelivr.com/package/npm/reset-css)

 
## Google Fonts

본 페이지는 '나눔고딕' 폰트를 사용합니다. 
```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```
페이지에 폰트를 적용(CSS 상속)합니다.
```css
body {
    font-family: 'Nanum Gothic', sans-serif;
}
```
[About Google Fonts](https://fonts.google.com/)


## Google Material Icons
본 페이지에 아이콘은 구글에서 제공하는 Material Icons를 사용하였습니다.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
사용법 예)
```html
<div class="material-icons">upload</div>
```
[About Google Material Icons](https://material.io/resources/icons/?style=baseline)



## JS Libraries 
 - [GSAP(The GreenSock Animation Platform)](https://github.com/jacobkosmart/12.Apr.21_Subway_JS_CSS#gsap)
 - [Swiper](https://github.com/jacobkosmart/12.Apr.21_Subway_JS_CSS#swiper)
 - [Youtube IFrame Player API](https://github.com/jacobkosmart/12.Apr.21_Subway_JS_CSS#youtube-api)
 - [ScrollMagic API](https://github.com/jacobkosmart/12.Apr.21_Subway_JS_CSS#scrollmagic)
 - [Lodash](https://github.com/jacobkosmart/12.Apr.21_Subway_JS_CSS#lodash)


### GSAP 
타임라인 기반의 애니메이션 자바스크립트 라이브러리 입니다.  
GSAP [ScrollToPlugin](https://greensock.com/scrolltoplugin/) 스크롤 에니메이션 플러그인 입니다.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

```javascript
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
```

[.to() 사용법](https://greensock.com/docs/v3/GSAP/gsap.to()) 

[GSAP Easing](https://greensock.com/docs/v2/Easing)

----

### SWIPER
[Swiper](https://swiperjs.com/)는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리입니다.

```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```
> Stylesheet 도 같이 link 해주어야 합니다.

```javascript
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
```
---

### Youtube API

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)를 통해 Youtube 영상이 출력될 위치에 요소를 지정(생성) 합니다.

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```
> `onYouTubePlayerAPIReady` 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않습니다!

```javascript
// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'J6n87QnfmXU', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'J6n87QnfmXU' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute() // 음소거!
      }
    }
  })
}
```
[플레이어 매개변수(playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters)에서 더 많은 옵션을 확인할 수 있습니다.

---
### ScrollMagic
[ScrollMagic](https://github.com/janpaepke/ScrollMagic)은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리입니다.<br>
대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용합니다.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```
```js
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
```
[ScrollMagic API](http://scrollmagic.io/docs/)

---

### Lodash

[Lodash](https://lodash.com/)는 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.


```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```
[Lodash API](https://lodash.com/docs/4.17.15) <br>
[Lodash throttle](https://lodash.com/docs/4.17.15#throttle)





