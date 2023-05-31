new Swiper('.menuSwiperContent', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 82,
    slidesPerGroup: 3,
    speed: 700,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    observer: true,
    observeParents: true,
    observeSlideChildren: true
});

new Swiper('.barSwiperContent', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 24,
    slidesPerGroup: 3,
    speed: 700,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    observer: true,
    observeParents: true,
    observeSlideChildren: true
});

const typeNewButton = document.querySelector('.typeNew');
const typeBistroButton = document.querySelector('.typeBistro');
const typeBuffetButton = document.querySelector('.typeBuffet');
const menuTypesType = document.querySelectorAll('.menu__inner_types_type');

const typeAllMenuSwiper = document.querySelectorAll('.menuSwiperContent');

typeNewButton.addEventListener('click', () => {
    typeNewButton.classList.add('typeActive');
    typeNewButton.classList.remove('typeSidesInactive');

    typeBistroButton.classList.remove('typeActive')

    typeBuffetButton.classList.remove('typeActive')
    typeBuffetButton.classList.add('typeSidesInactive')

    typeAllMenuSwiper[0].classList.add('activeSwiper')
    typeAllMenuSwiper[1].classList.remove('activeSwiper')
    typeAllMenuSwiper[2].classList.remove('activeSwiper')

    menuTypesType.forEach(type => {
        type.style.left = '160px'
    })
    menuTypesType[2].style.left = '130px'


})
typeBistroButton.addEventListener('click', () => {
    typeNewButton.classList.remove('typeActive');
    typeNewButton.classList.remove('typeSidesInactive');

    typeBistroButton.classList.add('typeActive')

    typeBuffetButton.classList.remove('typeActive')
    typeBuffetButton.classList.remove('typeSidesInactive')

    typeAllMenuSwiper[1].classList.add('activeSwiper')
    typeAllMenuSwiper[0].classList.remove('activeSwiper')
    typeAllMenuSwiper[2].classList.remove('activeSwiper')

    menuTypesType.forEach(type => {
        type.style.left = '0px'
    })
})
typeBuffetButton.addEventListener('click', () => {
    typeNewButton.classList.remove('typeActive');
    typeNewButton.classList.add('typeSidesInactive');

    typeBistroButton.classList.remove('typeActive')

    typeBuffetButton.classList.add('typeActive')
    typeBuffetButton.classList.remove('typeSidesInactive')

    typeAllMenuSwiper[2].classList.add('activeSwiper')
    typeAllMenuSwiper[1].classList.remove('activeSwiper')
    typeAllMenuSwiper[0].classList.remove('activeSwiper')

    menuTypesType.forEach(type => {
        type.style.left = '-165px'
    })
    menuTypesType[0].style.left = '-130px'

})


const typeTeaButton = document.querySelector('.typeTea');
const typeMilkshakesButton = document.querySelector('.typeMilkshakes');
const typeCoffeeButton = document.querySelector('.typeCoffee');
const barTypesType = document.querySelectorAll('.bar__inner_types_type');

const typeAllBarSwiper = document.querySelectorAll('.barSwiperContent');

typeTeaButton.addEventListener("click", ()=>{

    typeTeaButton.classList.add('typeActive');
    typeTeaButton.classList.remove('typeSidesInactive');

    typeMilkshakesButton.classList.remove('typeActive')

    typeCoffeeButton.classList.remove('typeActive')
    typeCoffeeButton.classList.add('typeSidesInactive')

    typeAllBarSwiper[0].classList.add('activeSwiper')
    typeAllBarSwiper[1].classList.remove('activeSwiper')
    typeAllBarSwiper[2].classList.remove('activeSwiper')

    barTypesType[0].style.left = '205px'
    barTypesType[1].style.left = '195px'
    barTypesType[2].style.left = '130px'
})

typeMilkshakesButton.addEventListener("click", ()=>{
    typeTeaButton.classList.remove('typeActive');
    typeTeaButton.classList.remove('typeSidesInactive');

    typeMilkshakesButton.classList.add('typeActive')

    typeCoffeeButton.classList.remove('typeActive')
    typeCoffeeButton.classList.remove('typeSidesInactive')

    typeAllBarSwiper[1].classList.add('activeSwiper')
    typeAllBarSwiper[0].classList.remove('activeSwiper')
    typeAllBarSwiper[2].classList.remove('activeSwiper')

    barTypesType.forEach(type => {
        type.style.left = '30px'
    })
    barTypesType[2].style.left = '20px'
})

typeCoffeeButton.addEventListener("click", () => {
    typeTeaButton.classList.remove('typeActive');
    typeTeaButton.classList.add('typeSidesInactive');

    typeMilkshakesButton.classList.remove('typeActive')

    typeCoffeeButton.classList.add('typeActive')
    typeCoffeeButton.classList.remove('typeSidesInactive')

    typeAllBarSwiper[2].classList.add('activeSwiper')
    typeAllBarSwiper[1].classList.remove('activeSwiper')
    typeAllBarSwiper[0].classList.remove('activeSwiper')

    barTypesType[0].style.left = '-115px'
    barTypesType[1].style.left = '-150px'
    barTypesType[2].style.left = '-180px'

})


const imgBlockBtn = document.querySelector('.imgBlock__inner_content_button');
const menuInnerTitle = document.querySelector('.menu__inner_title');

imgBlockBtn.addEventListener('click', () => {
    menuInnerTitle.scrollIntoView({behavior: "smooth"})
})

const nav = document.querySelectorAll('.imgBlock__inner_span');
const aboutInnerTitle = document.querySelector('.about__inner_title');
const contactsInnerTitle = document.querySelector('.contacts__inner_title');

nav[1].addEventListener('click', ()=> {
    aboutInnerTitle.scrollIntoView({behavior: "smooth"})
})

nav[2].addEventListener('click', ()=> {
    menuInnerTitle.scrollIntoView({behavior: "smooth"})
})

nav[3].addEventListener('click', ()=> {
    contactsInnerTitle.scrollIntoView({behavior: "smooth"})
})
