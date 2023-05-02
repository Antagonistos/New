import { cartitems } from "./Cart/cartItem.js"

let items = document.querySelector('#hoverItems')
let cartItemIco = items.querySelector('#cartItem')
let cartInfo = JSON.parse(localStorage.getItem('itemSavedInfo'))

if (localStorage.getItem('itemSavedInfo') !== null) {
	cartInfo.forEach((item) => {
		cartItemIco.classList.add('active')
		let items = cartItemIco.querySelector('#items')
		items.innerHTML += `
			<li class="item" id="itemCartIco">
				<img src="${item.img}" alt="" class="img">
				<h4 class="subject">${item.title}</h4>
				<p class="price">${item.price}</p>
				<button class="delete" id="deleteItem">&#10006; </button>
			</li>
		`

		window.addEventListener('click', (event) => {
			if (event.target.closest('#deleteItem')) {
				let deleteItem = event.target.closest('#deleteItem');
				let item = deleteItem.closest('.item')
				item.remove()
			}
		})
	})
}
