let accordion = document.querySelectorAll('#accordion')

accordion.forEach((item) => {
	item.addEventListener('click', function () {
		if (item.classList.contains('active')) {
			return
		} else {
			accordion.forEach(function (item) {
				item.classList.remove('active')
			})
			item.classList.add('active')
		}
	})
})

export { accordion }