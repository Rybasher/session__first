
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
