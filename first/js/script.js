;
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();;
$(".icon__menu").click(function () {
	$(this).addClass("active");
	$('.menu__body, .sec__img, .secreatar__container>p').addClass('active');

	$('body').addClass('lock');
	$('.icon__burger').addClass('active');
})
$('.icon__burger').click(function () {
	$(this).removeClass("active");
	$('.menu__body, .icon__menu, .sec__img, .secreatar__container>p').removeClass('active');
	$('body').removeClass('lock');
});

$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: true
	});
});;
const animItems = document.querySelectorAll(".anim-items");
const animItems_two = document.querySelectorAll(".anim-side");

if (animItems.length > 0) {
	document.querySelector("body").addEventListener('scroll', animOnSCroll);

	function animOnSCroll() {

		for (let index = 0; index < animItems.length; index++) {

			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;


			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);


			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add("active");

			}
			// else {
			// 	animItem.classList.remove("active");


			// }

		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// const rect = el.getBoundingClientReact(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop, left: rect.left + scrollLeft
		}
	}
	animOnSCroll();
}

if (animItems_two.length > 0) {
	document.querySelector("body").addEventListener('scroll', animOnSCroll__two);

	function animOnSCroll__two() {

		for (let index = 0; index < animItems_two.length; index++) {
			const animItemTwo = animItems_two[index];
			const animItemHeightTwo = animItemTwo.offsetHeight;
			const animItemOffsetTwo = offset(animItemTwo).top;
			const animStartTwo = 4;


			let animItemPointTwo = window.innerHeight - animItemHeightTwo / animStartTwo;

			if (animItemHeightTwo > window.innerHeight) {
				animItemPointTwo = window.innerHeight - (window.innerHeight / animStartTwo);


			}

			if ((pageYOffset > animItemOffsetTwo - animItemPointTwo) && pageYOffset < (animItemOffsetTwo + animItemHeightTwo)) {
				animItemTwo.classList.add("active");

			}
			// else {
			// 	animItem.classList.remove("active");


			// }

		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// const rect = el.getBoundingClientReact(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop, left: rect.left + scrollLeft
		}
	}
	animOnSCroll__two();
}


const anchors = document.querySelectorAll('.menu__link[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
;
let acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
};
let prog = document.querySelector(".progressBar");

window.addEventListener("scroll", myFunction);

function myFunction() {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (winScroll / height) * 100;
	console.log(scrolled);
	prog.style.width = scrolled + "%";

} ;
var swiper = new Swiper('.swiper-container', {
	pagination: {
	  el: '.swiper-pagination',
	  type: 'progressbar',
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	
 });;

/** 
 * В данном файле выполнено первое задание по Экстримальному программированию
 * Изначально создаем переменные и добавляем в них значения с которыми потом будем работать
 *
 * */
let datas = document.querySelectorAll('.input__data');
let input = document.querySelectorAll('.rating');
let messageBox = document.querySelectorAll('.message');


let submit = document.querySelector('.submit');

/** 
 * Далее мы проходим по всем элементам в массиве datas 
 * */

for (let i = 0; i < datas.length; i++) {

	/** 
	 * каждому элементу массива добавляем событие
	 * **/
	datas[i].addEventListener('click', function() {		
		/** 
	 * после, в каждом элементе проходим по блокам с сообщениями и задаем свойство 
	 * display: none
	 * */
		for (let i = 0; i < messageBox.length; i++) {
			messageBox[i].style.display = "none";	
		}

	})
	/** 
	 * Далее для всех инпутов задаем событие на ввод значений 
 	 * @param {Array} datas - массив блоков с полями для вводимых оценок
	 * 
	 * @example
	 * inputs.addEventListener('keyup', function(){
	 * 	действия
	 * }
	 * */
	datas[i].querySelector('.rating').addEventListener('keyup', function(){
		let val = this.value;
		// console.log(val);
		let number = /[0-9]/g;
		let symbols = RegExp("[AaBbCcDdFf]");

		this.parentNode.parentNode.children[1].style.display = "block";
	  /**
		*  Так как у нас много блоков с одинаковыми классов
		* C помощью parents and clinds мы указываем, что обращаемся
		* к ребенку необходимого элемента
		* @example 
		* element.parentNode.parentNode.children[1].children[0];
		*/
		let message_class =  this.parentNode.parentNode.children[1].children[0];

		/**
		 * с помощью регулярных выражений мы делаем валидацию наших полей
		 */
			if (val.match(number)) {
				
				message_class.classList.add("error");	
				message_class.classList.remove("valid");
				this.parentNode.children[1].style.borderBottom = "2px solid red";

			}
			else{
				// console.log(this);

				message_class.classList.remove("error");	
				message_class.classList.add("valid");	
				this.parentNode.children[1].style.borderBottom = "2px solid green";



			}
			if (val.length == 1 && val.match(symbols)) {
				this.parentNode.parentNode.children[1].children[1].classList.remove("error");	
				this.parentNode.parentNode.children[1].children[1].classList.add("valid");	
				this.parentNode.children[1].style.borderBottom = "2px solid green";

			}
			
			else{
				this.parentNode.parentNode.children[1].children[1].classList.add("error");	
				this.parentNode.parentNode.children[1].children[1].classList.remove("valid");	
				this.parentNode.children[1].style.borderBottom = "2px solid red";

			}

			
	});	
}
/** 
	 * Далее мы останавливаем перезагрузку страницы для выполнения определенных действий
	 * @example
	 * 
	 * button.addEventListener('click', function(e){
	 * e.preventDefault();
	 * ...дальнейшие действия...
	 * }
	 * */
submit.addEventListener('click', function(e){
	e.preventDefault();
	let numbers = document.querySelectorAll('.numbers');
	let string = document.querySelectorAll('.string');
	let answer = true;
	let arr = []
	/**
	 * далее прверяем нет ли выводимых ошибок, для этого просто прверяем наличие определённых классов
	 * @param {Array} - массив блоков со знчением цифр
	 * @returns {Array} - массив ответов
	 */
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < string.length; j++) {
			if (numbers[i].classList.contains('error') && string[j].classList.contains('error')) {			
				arr.push('1');
			}
			else if (!(numbers[i].classList.contains('error') && string[j].classList.contains('error')) && 
			
			!(numbers[i].classList.contains('valid') && string[j].classList.contains('valid'))){
				arr.push('1');
			}
			else{
				arr.push("0");				
			}			
		}	
	}
	console.log(arr);
	let negative = arr.filter(function(rat) {
		return rat === "1";
	})
	if (negative.length > 0) {
		console.log("baddd", negative.length);
		document.querySelector('.full__message').style.display = "block";
		document.querySelector('.result__text').innerHTML = "";

	}
	else{
		answer = true;
		console.log("good", negative.length);
		document.querySelector('.full__message').style.display = "none";
		result();
	}

})

function result() {
	let rating = [];
	let sum = 1000;
	let rating_text = document.querySelectorAll('.rating');
	let checks = document.querySelectorAll('.time');
	for (let i = 0; i < rating_text.length; i++) {
		rating.push(rating_text[i].value.toUpperCase());
		
		
	}
	let uniqRating = new Set(rating);

	let newRating = [...uniqRating];

	for (let i = 0; i < newRating.length; i++) {
		arr_create(newRating[i], newRating);
		
	}
	/**
	 * Далее прверяем количество определённых оценок
	 * 
	 */


	let a = rating.filter(function(rat) {
		return rat === "A";
	})
	let b = rating.filter(function(rat) {
		return rat === "B";
	})
	let c = rating.filter(function(rat) {
		return rat === "C";
	})
	let d = rating.filter(function(rat) {
		return rat === "D";
	})
	let f = rating.filter(function(rat) {
		return rat === "F";
	})
	
	if (c.length >= 1 || d.length >= 1 || f.length >= 1) {
		document.querySelector('.result__text').innerHTML = "Ученик не будет получать стипендию";

	}
	
	else {
		let andr_img = document.querySelector('.sec__img');
		let andr_p = document.querySelector('.secreatar__container>p');
		if (a.length === rating.length) {
			sum = sum + (sum * 0.5);
			let checked = [];
			for (let i = 0; i < checks.length; i++) {
				if (checks[i].checked) {
					checked.push(this);
				}
				
			}
			console.log(checked + "checked");
			if (checked.length < checks.length) {
				document.querySelector('.result__text').innerHTML = "Ученик не будет получать стипендию, сессия сдана не вовремя";
	
			}
			else{
				document.querySelector('.result__text').innerHTML = "Стипендия = " + sum.toString();
				andr_img.classList.add("active");
				andr_p.classList.add("active");
				
	
			}
	
		}
		else if (b.length === rating.length) {
			console.log(b.length + "count b");
			let checked = [];
			for (let i = 0; i < checks.length; i++) {
				if (checks[i].checked) {
					checked.push(this);
				}
				
			}
			if (checked.length < checks.length) {
				document.querySelector('.result__text').innerHTML = "Ученик не будет получать стипендию, сессия сдана не вовремя";
	
			}
			else{
				sum = 1000;	
				document.querySelector('.result__text').innerHTML = "Стипендия = " + sum.toString();
				
				
	
			}
	
		}
		else if(a.length >= 1 && b.length >= 1) {
		
			let checked = [];
			sum = sum + (sum * 0.25);	
			for (let i = 0; i < checks.length; i++) {
				if (checks[i].checked) {
					checked.push(this);
				}
				
			}
			if (checked.length < checks.length) {
				document.querySelector('.result__text').innerHTML = "Ученик не будет получать стипендию, сессия сдана не вовремя";
	
			}
			else{
				
				document.querySelector('.result__text').innerHTML = "Стипендия = " + sum.toString();
				
				
			}
		}
	}	
	
	
}



function arr_create(letter, mas){
	let a = mas.filter(function(rat) {
		return rat === letter.toString().toUpperCase();
	})
}
;


function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});


