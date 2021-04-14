[![Netlify Status](https://api.netlify.com/api/v1/badges/4ecc6bac-a7f3-40a6-b4c2-b5b8ca27b50b/deploy-status)](https://app.netlify.com/sites/hardcore-dijkstra-7a109c/deploys)

# 🌮 Subway 

[DEMO](https://hardcore-dijkstra-7a109c.netlify.app/)

![Subway](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e5e2cdd0-945f-473e-85f8-6a82eba6517d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210414T094459Z&X-Amz-Expires=86400&X-Amz-Signature=ea37f284c4df894ca14e96528d47212da3034ccd62f65eee06a919d4bee30f3b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

---

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


---

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

---

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

---

## Reset.css
각 브라우저에 default css style 을 초기화 합니다.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```
[About jsdelivr reset-css](https://www.jsdelivr.com/package/npm/reset-css)

----
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

---

### Google Material Icons
본 페이지에 아이콘은 구글에서 제공하는 Material Icons를 사용하였습니다.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
사용법 예)
```html
<div class="material-icons">upload</div>
```
[About Google Material Icons](https://material.io/resources/icons/?style=baseline)

---

### JS Libraries 
 - [GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)
 - [Swiper](https://swiperjs.com/)
 - [Youtube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference)
 - [ScrollMagic API](http://scrollmagic.io/docs/)
 - [Lodash](https://lodash.com/)

















