let cartitems = [];
let btnAddInCart;
let totalCount = 0;
let totalPrice = 0;
let cartsIcon = document.querySelector('#cartItem')

if (document.querySelector('#modelItem')) {
	btnAddInCart = document.querySelector('#BtnAddItemInCart');

	btnAddInCart.addEventListener('click', () => {
		let itemInfo = btnAddInCart.closest('#modelItem');
		let item = {
			title: itemInfo.querySelector('#titleItem').innerText,
			price: itemInfo.querySelector('#modelPrice').innerText,
			pastPrice: itemInfo.querySelector('#modelPastPrice').innerText,
			sum: itemInfo.querySelector('#sum').innerText,
			img: itemInfo.querySelector('#itemImg').src,
		}

		cartitems.push(item)
		localStorage.setItem('itemSavedInfo', JSON.stringify(cartitems));
		location.reload();
	})
}



if (localStorage.getItem('itemSavedInfo') !== null) {
	cartitems = JSON.parse(localStorage.getItem('itemSavedInfo'));
	if (document.querySelector('#itemsCart')) {
		changeNewCard()
	}
}

cartitems.forEach((item) => {
	totalCount += +item.sum
	localStorage.setItem('totalCount', totalCount)
})

if (localStorage.getItem('itemSavedInfo') !== '[]') {
	cartsIcon.innerHTML += `<a href="cart.html" class="count" id="card-icon-count">${totalCount}</a>`
}


window.addEventListener('click', function (event) {
	let count;
	let item = event.target.closest('.item');
	if (event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus') {
		const control = event.target.closest('#control')
		count = control.querySelector('#sum')
	}
	if (document.querySelector('#BtnAddItemInCart')) {
		if (event.target.dataset.action === 'plus') {
			count.innerText++
			changeNewCard()
		}
	}
	if (event.target.dataset.action === 'plus') {
		count.innerText++
		reloadInfoItem()
	}

	if (event.target.dataset.action === 'minus') {
		if (count.innerText <= 1) {
			item.remove()
			reloadInfoItem()
			changeNewCard()
			location.reload()
		} else {
			count.innerText--
			reloadInfoItem()
		}
	}
	if (event.target.dataset.action === 'delete') {
		item.remove()
		reloadInfoItem()
		changeNewCard()
		location.reload()
	}

})

function changeNewCard() {
	let itemsCart = document.querySelector('#itemsCart');
	cartitems.forEach((item) => {
		let card = document.createElement('div')
		let totalPrices = document.querySelector('#price')

		let itemPrices = Number(item.price.replace(/\s/g, '') * item.sum)
		totalPrice += itemPrices

		if (localStorage.getItem('totalCount') > '3') {
			totalPrices.innerText = totalPrice - 20000
		} else {
			totalPrices.innerText = totalPrice

		}
		document.querySelector('#itemsCount').innerText = cartitems.length

		itemsCart.appendChild(card)
		card.innerHTML += `
				 <li class="item" id="ItemCard">
				 <img src=${item.img} alt="" class="cart-item-img" id="itemImg">
				 <div class="info">
			<div class="text-content">
				<h2 class="title" id="itemTitle">${item.title}</h2>
				<div class="ranked">
					<p class="link-menu">Рейтинг</p>
					<button><img src="./images/Star 1.png" alt=""></button>
					<button><img src="./images/Star 1.png" alt=""></button>
					<button><img src="./images/Star 1.png" alt=""></button>
					<button><img src="./images/Star 1.png" alt=""></button>
					<button><img src="./images/star-off.png" alt=""></button>
				</div>
			</div>
			<div class="cart__price">
				<div class="content">
					<div class="price__control" id="control">
						<button id="btnMinus" data-action="minus">-</button>
						<h4 class="number" id="sum">${item.sum}</h4 >
	<button id="btnPlus" data-action="plus">+</button>
					</div >
	<div class="price__text">
		<h2 class="subject" id="itemPrice">${item.price}</h2>
		<s id="itemPastPrice">${item.pastPrice} </s>
	</div>
				</div >
			</div >
			<div class="item-info">
				<ul class="content">
					<li class="item">
						Цвет
						<h4 class="">
							<img src="./images/color-black.png" alt="">
							Черный
						</h4>
					</li>
							 <li class="item">
								 Размер, см
								 <h4 class="">
									 <img src="./images/color-black.png" alt="">
									 1500 × 2000
								 </h4>
							 </li>
							 <li class="item">
								 Вес стека, г
								 <h4 class="">
									 <img src="./images/color-black.png" alt="">
									 150
								 </h4>
							 </li>
						 </ul>
					 </div>
					 <div class="clear-buttons">
						 <button>
							 <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
								 xmlns="http://www.w3.org/2000/svg">
								 <path
									 d="M14.7145 1.64647C12.9744 -0.0931846 10.1436 -0.0931846 8.40392 1.64647L7.99985 2.0503L7.59602 1.64647C5.85636 -0.0934201 3.0253 -0.0934201 1.28565 1.64647C-0.418688 3.35081 -0.429755 6.05236 1.25998 7.93071C2.80114 9.64328 7.34642 13.3432 7.53927 13.4998C7.67019 13.6063 7.82772 13.6581 7.98431 13.6581C7.98949 13.6581 7.99467 13.6581 7.99962 13.6578C8.16162 13.6654 8.3248 13.6098 8.45996 13.4998C8.65281 13.3432 13.1986 9.64328 14.7402 7.93047C16.4297 6.05236 16.4186 3.35081 14.7145 1.64647ZM13.69 6.98553C12.4884 8.32041 9.18545 11.0735 7.99962 12.0505C6.81379 11.0738 3.51155 8.32088 2.31018 6.98576C1.13141 5.67561 1.12035 3.80974 2.28451 2.64557C2.87908 2.05124 3.6599 1.75385 4.44072 1.75385C5.22154 1.75385 6.00236 2.05101 6.59692 2.64557L7.48511 3.53377C7.59084 3.63949 7.72412 3.7026 7.86399 3.72473C8.09098 3.77348 8.33728 3.71013 8.51389 3.534L9.40255 2.64557C10.5919 1.45668 12.5265 1.45692 13.7152 2.64557C14.8794 3.80974 14.8683 5.67561 13.69 6.98553Z"
									 fill="#858FA4" />
							 </svg>
							 В избранное</button>
						 <button data-action="delete">
							 <svg width="9" height="8" viewBox="0 0 9 8" fill="none"
								 xmlns="http://www.w3.org/2000/svg">
								 <path
									 d="M8.69638 1.57572L6.27243 3.99992L8.69638 6.42402C9.05693 6.78471 9.05693 7.36897 8.69638 7.72966C8.51623 7.90981 8.28005 7.99996 8.04397 7.99996C7.80751 7.99996 7.5713 7.90995 7.39129 7.72966L4.96681 5.30529L2.54251 7.72964C2.36238 7.90979 2.12617 7.99993 1.8899 7.99993C1.65368 7.99993 1.41763 7.90993 1.23735 7.72964C0.876797 7.36911 0.876797 6.78482 1.23735 6.424L3.66123 3.9999L1.23721 1.57572C0.876659 1.21516 0.876659 0.630758 1.23721 0.270207C1.59769 -0.090069 2.18175 -0.090069 2.54237 0.270207L4.96679 2.69442L7.39101 0.270207C7.7517 -0.090069 8.33583 -0.090069 8.69625 0.270207C9.05694 0.630758 9.05693 1.21516 8.69638 1.57572Z"
									 fill="#858FA4" />
							 </svg>
	
							 Удалить
						 </button>
					 </div>
				 </div >
			 </li >
	`
	})
}





function reloadInfoItem() {
	cartitems = []
	let itemsCard = document.querySelectorAll('#ItemCard')
	itemsCard.forEach((item) => {
		let newItem = {
			title: item.querySelector('#itemTitle').innerText,
			price: item.querySelector('#itemPrice').innerText,
			pastPrice: item.querySelector('#itemPastPrice').innerText,
			sum: item.querySelector('#sum').innerText,
			img: item.querySelector('#itemImg').src,
		}
		cartitems.push(newItem)
	})
	localStorage.setItem('itemSavedInfo', JSON.stringify(cartitems));
}

export { cartitems, reloadInfoItem, changeNewCard }