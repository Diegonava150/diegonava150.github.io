let welcome;
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
if (minute < 10) {
	minute = "0" + minute;
}
if (second < 10) {
	second = "0" + second;
}
if (hour < 12) {
	welcome = "Buenos dias!";
} else if (hour < 17) {
	welcome = "Buenas tardes!";
} else {
	welcome = "Buenas noches!";
}

function display(val) {
	if (event.key === 'Enter') {
		if ((val.value).length > 0) {
			console.log(val.value)
			customAlert(`Buscando: "${val.value}"`, 3500)
		} else {
			customWarn('Escribe lo que deseas buscar', 1500)
		}
	}
}


$(document).ready(function () {
	const body = document.querySelector('body');
	const toggled = document.getElementById('toggle');
	const media = window.matchMedia("(min-width:700px)")

	toggled.onclick = function () {
		body.classList.toggle('light');
		toggled.classList.toggle('active')
	}
	if (media.matches) {
		console.log(true)
		$('#dashboard').mouseenter(function () {
			this.innerHTML = `¡${welcome}`;
		});
		$('#dashboard').mouseleave(function () {
			this.innerHTML = "Panel de control";
		});
		$('#kleenpulse').mouseenter(function () {
			this.innerHTML = "Bienvenido";
		});
		$('#kleenpulse').mouseleave(function () {
			this.innerHTML = "Zayro System";
		});
	} else {
		console.log(false)
	}
})

function customAlert(msg, duration) {
	var styler = document.createElement("div");
	styler.className = 'dis-wrap'

	styler.innerHTML = "<h1 class='display'>" + msg + "</h1>";
	setTimeout(function () {
		styler.parentNode.removeChild(styler);
	}, duration);
	document.body.appendChild(styler);
}

function customWarn(msg, duration) {
	var styler = document.createElement("div");
	styler.className = 'dis-warn'

	styler.innerHTML = "<h1 class='display'>" + msg + "</h1>";
	setTimeout(function () {
		styler.parentNode.removeChild(styler);
	}, duration);
	document.body.appendChild(styler);
}


const app = new Vue({
	el: "#app",
	data: {
		items: [
			{ name: "Hombre araña", cost: 130000, quantity: 1 },
			{ name: "Hulk", cost: 120000, quantity: 1 },
			{ name: "Enfermera", cost: 150000, quantity: 1 }]
	},


	methods: {
		addItem() {
			this.items.push({
				name: "disfraz",
				cost: 0,
				quantity: 1
			});

		},
		removeItem(index) {
			this.items.splice(index, 1);
		}
	},

	computed: {
		subTotal() {
			return this.items.reduce((accumulate, item) => accumulate + item.cost * item.quantity, 0);
		},
		salesTax() {
			return this.subTotal * 0.08875;
		},
		totalDue() {
			return this.subTotal + this.salesTax;
		}
	},

	filters: {
		currency(value) {
			return value.toFixed(2);
		}
	}
});