//menu
const headerBtn = $('.header__burger');
const headerInfo = $('.header__info');
const headerMobile = $('.header__mobile');
const nav = $('.nav');
const userInfo = $('.acc-info-btn');
const overlayInfo = $('.overlay-status-mobile');
const userInfoMenuMobi = $('.status-mobile');

//show menu for mobile
function showMenu() {
	headerMobile.toggleClass('show');
	overlayInfo.toggleClass('open');
	headerBtn.toggleClass('--close');
}
$('.header__burger').on('click', showMenu);

//show menu user in mobile
$('.acc-info-btn').on('click', function (e) {
	userInfoMenuMobi.addClass('open');
	if (document.body.offsetWidth < 992) {
		overlayInfo.addClass('open');
	}
});

//overlay for menu user
$('.overlay-status-mobile').on('click', function (e) {
	userInfoMenuMobi.removeClass('open');
	overlayInfo.removeClass('open');
	headerMobile.removeClass('show');
	headerBtn.removeClass('--close');
});

//dropdown in menu mobile
$('.has-sub-menu').on('click', function () {
	const child = $(this).children(':last');
	// child.toggleClass('--open');
	if (child.hasClass('--open')) {
		child.removeClass('--open');
		return;
	}
	child.addClass('--open');
});
//menu - end

//find
const findTitleList = document.querySelectorAll(
	'.find__title-list .main-title'
);
const findChangeFollowTitle = document.querySelectorAll('.find__change');

function showFindTitle() {
	findTitleList.forEach((x) => {
		x.classList.remove('--choice');
	});

	findChangeFollowTitle.forEach((x) => {
		x.classList.remove('--show');
	});

	this.classList.add('--choice');
	findChangeFollowTitle[this.dataset.idTitle].classList.add('--show');
}

findTitleList.forEach((x) => {
	x.addEventListener('click', showFindTitle);
});
//find - end

//services
const servicesBox = document.querySelectorAll('.services-2__box');
const contentServices = document.querySelectorAll(
	'.services-2__content .content'
);

function removeClassContentServices() {
	contentServices.forEach((x) => {
		x.classList.remove('--show');
	});
	servicesBox.forEach((x) => {
		x.classList.remove('active');
	});
}

function showServices() {
	removeClassContentServices();
	contentServices[this.dataset.content].classList.add('--show');
	this.classList.add('active');
}

servicesBox.forEach((x) => {
	x.addEventListener('click', showServices);
});
//services - end

//scroll
function fixedMenu() {
	if ($(window).scrollTop() > 0) {
		$(nav).addClass('--scroll');
	} else {
		$(nav).removeClass('--scroll');
	}
}

$(window).on('scroll', fixedMenu);

$('#scroll-to-top').click(function () {
	$('html, body').animate({scrollTop: 0}, 'fast');
});
//scroll - end

//wow.js
new WOW().init();

//couter find
jQuery(document).ready(function ($) {
	$('.count').counterUp({
		delay: 5,
		time: 2000,
	});
});
