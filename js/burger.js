let burgerBtn = document.querySelector('#burger-btn')
let burger = burgerBtn.parentNode;


burgerBtn.addEventListener('click', () => {
	if (burger.classList.contains('active')) {
		burger.classList.remove('active')
	} else {
		burger.classList.add('active')
	}
})

export { burgerBtn, burger }