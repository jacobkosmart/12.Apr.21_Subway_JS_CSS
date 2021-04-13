// branch, 추가도 작성되는 페이지에 공통으로 사용되는 header, footer 부분 Js script 들

// 돋보기를 누르면 input 이 커지게 하는 기능임 <header>
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus()
})
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', 'Search')
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

// copyright 부분 자동 연도 삽입 <footer>
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear() // 올해인 2021년 이 반환됨