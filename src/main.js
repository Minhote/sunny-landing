// Toggle BTN
const toggleBtn = document.querySelector('.main-container__wrap__nav__toggle')
const ulNav = document.querySelector('.main-container__wrap__nav__list')

toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('active')
    ulNav.classList.toggle('active')
})