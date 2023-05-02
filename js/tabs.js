let tabs = document.querySelectorAll('.tab');



tabs.forEach((item) => {
	item.addEventListener('click', function () {
		if (item.classList.contains('active')) {
			return
		} else {
			tabs.forEach(function (item) {
				item.classList.remove('active')
			})
			item.classList.add('active')
		}
	})
})


export { tabs }