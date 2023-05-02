let signUp = document.querySelector('#sign')
let modal = document.querySelector('#modal')
let account = document.querySelector('#sign-up-menu')

signUp.addEventListener('click', () => {
	renderModal()

	let modalCloseBtn = document.querySelector('#close-modal')

	modalCloseBtn.addEventListener('click', () => {
		modal.classList.remove('active')
	})


	let reg = document.querySelector("#register")
	reg.addEventListener('click', () => {
		renderModalRegister()
	})

	let signHelp = document.querySelector('#sign-help')
	signHelp.addEventListener('click', () => {
		renderModalHelp()
	})
})


function renderModal() {
	modal.classList.add('active')
	modal.innerHTML =
		`
	<div class="modal__inner">
	<button class="button" id="close-modal">
		&#10006;
	</button>
	<h2 class="title">Вход в личный кабинет</h2>
	<div class="tabs">
		<button class="tab active">Покупатель</button>
		<button class="tab">Авторизированный дилер</button>
	</div>
	<div class="sign-in-account">
		<h4>Войти с помощью</h4>
		<img src="./images/google.svg" alt="">
		<img src="./images/facebook.svg" alt="">
	</div>
	<form action="" class="form">
		<input type="mail" placeholder="Ваша почта" class="input email">
		<input type="text" placeholder="Пароль" class="input password">
	</form>
	<a href="#" class="sign-help" id="sign-help">
		Забыли пароль?
	</a>
	<a href="#" class="btn active">Войти</a>
	<a href="#" class="reg" id="register">Зарегистрироваться</a>
</div>
	`
}

function renderModalRegister() {
	modal.innerHTML =
		`
<div class="modal__inner">
<button class="button" id="close-modal">
&#10006;
</button>
<h2 class="title">Регистрация</h2>
<div class="sign-in-account">
<h4>Войти с помощью</h4>
<img src="./images/google.svg" alt="">
<img src="./images/facebook.svg" alt="">
</div>
<form action="" class="form">
<input type="text" placeholder="Имя пользователя" class="input ">
<input type="mail" placeholder="Ваша Почта" class="input email">
<input type="text" placeholder="Пароль" class="input password">
</form>
<a href="#" class="btn active">Зарегистрироваться</a>
</div>
`
}
function renderModalHelp() {
	modal.innerHTML =
		`
		<div class="modal__inner">
			<button class="button" id="close-modal">
				&#10006;
			</button>
			<h2 class="title">Восстановление пароля</h2>
			<p class="text">Мы отправим письмо со ссылкой для смены пароля на указанный Вами при регистрации адрес. Откройте письмо и перейдите по ссылке из письма.</p>
			<form action="" class="form">
				<input type="mail" placeholder="Ваша почта" class="input email">
			</form>
			<a href="#" class="btn active" id="new-password-btn">Восстановить пароль</a>
		</div>
		`
	function NewPassword() {
		modal.innerHTML =
			`
					<div class="modal__inner">
						<div class="sign-help-model__inner">
							<h2 class="title">Изменить пароль</h2>
							<form action="" class="form">
								<input type="text" placeholder="Новый пароль" class="input password">
								<input type="text" placeholder="Подтверждение пароля" class="input password">
							</form>
							<a href="#" id="save-password" class="btn active">Изменить пароль</a>
						</div>
					</div>
					`
		let savePassword = document.querySelector('#save-password')
		savePassword.addEventListener('click', () => {
			modal.innerHTML = `
					<div class="modal__inner">
							<div class="sign-help-model__inner">
							<h2 class="title">Ваш пароль успешно сохранен</h2>
							
							<a href="index.html" class="btn active">Вернуться на главную</a>
							</div>
					</div>
					`
			localStorage.setItem('accountIsSign', '5')
		})
	}
	let newPasswordBtn = document.querySelector('#new-password-btn')
	newPasswordBtn.addEventListener('click', () => {
		NewPassword()
	})
}


if (localStorage.getItem('accountIsSign') == '5') {
	account.innerHTML =
		`
		<a class="sign" href="account.html" id="sign">Александр</a>
		<div class="modal" id="modal">
			<h4></h4>
		</div>
		<img src="./images/ava.png" alt="" id="sign-avatar">
	`
}






export { renderModal, renderModalRegister, renderModalHelp }