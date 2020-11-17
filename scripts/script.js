// BURGER

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".moved-menu");

burger.addEventListener('click', function() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	if((burger.classList.contains('active')) && (window.pageYOffset == 0)) {
		header.classList.add('background');
	} else if(!(burger.classList.contains('active')) && (window.pageYOffset == 0)) {
		header.classList.remove('background');
	}
});

window.addEventListener('resize', function() {
	if(innerWidth > 992) {
		burger.classList.remove('active');
		menu.classList.remove('active');
	}
});


// FILTER

const finderItem = document.querySelectorAll('.body-finder__item');
const finderChoose = document.querySelectorAll('.body-finder__choose');

finderItem.forEach(element => {
	element.addEventListener('click', function(){

		finderItem.forEach(element => {
			if(element.classList.contains('active')){
				element.classList.remove('active');
				element.classList.add('hidden');
			}
		});

		if(!element.classList.contains('active')){
			element.classList.add('active');
			element.classList.remove('hidden');
		}
	});
});

window.addEventListener('click', event => {
	if (event.target.className != 'body-finder__current') {
		finderItem.forEach(element => {
			if(element.classList.contains('active')){
				element.classList.remove('active');
				element.classList.add('hidden');
			}
		});
	} else{
		return;
	}
})

finderChoose.forEach(element => {
	element.addEventListener('click', function(){
		let text = this.innerText,
		finderCurrent = this.closest('.body-finder__item').querySelector('.body-finder__current');
		finderCurrent.innerText = text;
	});
});

// STAR RATING

const stars = document.querySelectorAll('.swiper__star');

stars.forEach(star => {
	star.addEventListener('click', function() {
		star.parentNode.dataset.totalValue = star.dataset.starValue
	});
});

// SWIPER

const slider = document.querySelector('.swiper-container');

const mySwiper = new Swiper(slider, {
	setWrapperSize: true,
	loop: false,
	slidesPerGroup: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

// bgi

function bgi() {
	let bgi = document.querySelectorAll(".bgi");
	for (var i = 0; i < bgi.length; i++) {
		if (bgi[i].querySelector('img')) {
			bgi[i].style.backgroundImage = 'url(' + bgi[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
bgi();


// HEADER BACKGROUND

const header = document.querySelector('header');

window.addEventListener('scroll', function() {
	if(window.pageYOffset > 0) {
		header.classList.add('background');
	}else if(window.pageYOffset == 0) {
		header.classList.remove('background');
	}
});

// POPUP

const openPPs = document.querySelectorAll('.pp');
const popup = document.querySelector('.popup');
const popupBody = document.querySelectorAll('.popup__body');
const body = document.querySelector('body');
const closePP = document.querySelector('.close-popup');
let paddingToFixBody = (window.innerWidth - document.querySelector('body').offsetWidth) + 'px';
const headerContainer = document.querySelector('.header');

for (let index = 0; index < openPPs.length; index++) {

	const openPP = openPPs[index];

	openPP.addEventListener('click', function () {
		popup.classList.add('_active');
		body.style.overflow = 'hidden';
		document.querySelector('body').style.paddingRight = paddingToFixBody;
		
		if (headerContainer.classList.contains("fixed"))
			headerContainer.style.paddingRight = paddingToFixBody;
	});
}

closePP.addEventListener('click', function () {
	popup.classList.remove('_active');
	body.style.overflow = 'visible';
	document.querySelector('body').style.paddingRight = '0px';
	headerContainer.style.paddingRight = '0px';
});

popup.addEventListener('click', function (e) {
	if (popup.classList.contains('_active') && e.target == popup) {
		popup.classList.remove('_active');
		body.style.overflow = 'visible';
		document.querySelector('body').style.paddingRight = '0px';
		headerContainer.style.paddingRight = '0px';
	}
});