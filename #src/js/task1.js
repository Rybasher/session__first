let datas = document.querySelectorAll('.input__data');
let input = document.querySelectorAll('.rating');
let messageBox = document.querySelectorAll('.message');


let submit = document.querySelector('.submit');

for (let i = 0; i < datas.length; i++) {

	datas[i].addEventListener('click', function() {
		// console.log(this);
		
		for (let i = 0; i < messageBox.length; i++) {
			messageBox[i].style.display = "none";
			
		}
		this.querySelector('.message').style.display = "block";

	})
	datas[i].querySelector('.rating').addEventListener('keyup', function(){
		let val = this.value;
		// console.log(val);
		let number = /[0-9]/g;
			if (val.match(number)) {
				
				this.parentNode.parentNode.children[1].children[0].classList.add("error");	
				this.parentNode.parentNode.children[1].children[0].classList.remove("valid");	
			}
			else{
				// console.log(this);

				this.parentNode.parentNode.children[1].children[0].classList.remove("error");	
				this.parentNode.parentNode.children[1].children[0].classList.add("valid");	

			}
			if (val.length > 1) {
				this.parentNode.parentNode.children[1].children[1].classList.add("error");	
				this.parentNode.parentNode.children[1].children[1].classList.remove("valid");	
			}
			else if (val.length < 1) {
				this.parentNode.parentNode.children[1].children[1].classList.add("error");	
				this.parentNode.parentNode.children[1].children[1].classList.remove("valid");
			}
			else{
				this.parentNode.parentNode.children[1].children[1].classList.remove("error");	
				this.parentNode.parentNode.children[1].children[1].classList.add("valid");	
			}
	});	
}

submit.addEventListener('click', function(e){
	e.preventDefault();
	let numbers = document.querySelectorAll('.numbers');
	let string = document.querySelectorAll('.string');
	let answer = true;
	let arr = []
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
	if (c.length > 1 || d.length > 1 || f.length > 1) {
		document.querySelector('.result__text').innerHTML = "Ученик не будет получать стипендию";

	}
	
	else if (a.length === rating.length) {
		sum = sum + (sum * 0.5);
		let checked = []
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

		}

	}
	else if (b.length === rating.length) {
		console.log(b.length + "count b");
		let checked = []
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
			sum = 1000;	
			document.querySelector('.result__text').innerHTML = "Стипендия = " + sum.toString();

		}

	}
	else if (a.length > 0 && b.length > 0  && c.length == 0 && d.length == 0 || f.length == 0) {
		sum = sum + (sum * 0.25);
		let checked = []
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

		}
	}
	
	
	// if (rating.indexOf('C') != -1 || rating.indexOf('D') != -1 || rating.indexOf('F') != -1){
	// 	document.querySelector('.result__text').innerHTML = "Ученик не будет получать стипендию";
		
	// }
	// else if (rating.indexOf('A') == 5) {
	// 	sum = sum + (sum * 0.5);
	// 	document.querySelector('.result__text').innerHTML = "Стипендия = " + str(sum);
	// }
	// else{
	// 	document.querySelector('.result__text').innerHTML = "";
		
	// }
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log(f);


}




