let prog = document.querySelector(".progressBar");

window.addEventListener("scroll", myFunction);

function myFunction() {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (winScroll / height) * 100;
	console.log(scrolled);
	prog.style.width = scrolled + "%";

} 