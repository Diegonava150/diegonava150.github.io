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



$(function () {
	$('#highchart_container').highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Disfraces más populares'
		},
		subtitle: {
			text: 'Fuente: Inventario'
		},
		xAxis: {
			categories: ['Camuflaje Militar',
				'Folk Arts-Cultural Treasures',
				'Christopher Columbus',
				'MaST',
				'Franklin Towne HS',
				'Laboratory Charter',
				'Green Woods',
				'Planet Abacus',
				'Mastery Thomas',
				'Mastery Shoemaker',
				'Mastery Pickett',
				'Ad Prima',
				'Wissahickon CS',
				'Philadelphia Academy',
				'KIPP West Philly',
				'Mastery Mann*',
				'Independence',
				'Russell Byers',
				'Mastery Cleveland*',
				'Philadelphia Performing Arts CS*',
				'Franklin Towne Elem.',
				'Pan-American ',
				'Prep Charter',
				'Northwood Academy',
				'Freire',
				'Mastery Harrity*',
				'Mastery Hardy Williams',
				'Discovery Charter',
				'Philadelphia Montessori',
				'Alliance for progress',
				'Community Academy ',
				'The Phila Charter Arts and Sciences',
				'Multicultural',
				'New Foundations',
				'First Phila Charter for Literacy',
				'Universal Daroff*',
				'Mastery Gratz*',
				'Harambee',
				'Mastery Lenfest',
				'Maritime',
				'Khepera CS',
				'Belmont Charter',
				'Mariana Bracetti',
				'Mastery Smedley*',
				'Global Leadership',
				'ASPIRA Pantoja',
				'Mastery Pastorius*',
				'West Phila. Achievement',
				'Southwest Leadership',
				'Mastery Clymer*',
				'West Oak Lane CS',
				'Sankofa Freedom',
				'Imani',
				'People for People',
				'Universal Institute',
				'Math, Civics,Science',
				'Universal Creighton*',
				'Philadelphia Electrical and Tech',
				'Tacony Academy',
				'ASPIRA Hostos',
				'Charter for Arch and Design',
				'Esperanza',
				'Birney Prep*',
				'Young Scholars Douglass*',
				'Memphis St. Academy @ JP Jones*',
				'Truebright',
				'Richard Allen prep',
				'Eastern University Charter',
				'Wakisha',
				'ASPIRA Olney HS*',
				'Imhotep',
				'Universal Bluford*',
				'ASPIRA Stetson*',
				'Universal Vare*',
				'Young Scholars Kenderton*',
				'Delaware Valley',
				'Boys Latin',
				'New Media',
				'Universal Alcorn*',
				'Walter Palmer',
				'World Communications',
				'Universal Audenried*',
				'Arise Academy'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '*Renaissance charter school',
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			}
		},
		tooltip: {
			valueSuffix: ''
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},  credits: {
			enabled: false
		},
		series: [{
			data: [89.2,
				88.4,
				87.7,
				86.6,
				86.1,
				83.9,
				83.8,
				81.8,
				81.5,
				79.5,
				79.5,
				77,
				76.7,
				74.8,
				74.7,
				74.6,
				74.1,
				74.1,
				73.9,
				72.5,
				72.4,
				72.4,
				71.9,
				71.7,
				71.2,
				70.2,
				69.9,
				69.8,
				69.8,
				69.4,
				67.9,
				67.6,
				66.9,
				66.5,
				66.2,
				66,
				65.5,
				65.5,
				65.1,
				64.7,
				64,
				63.9,
				63.2,
				62.8,
				62.7,
				62.5,
				62.1,
				62,
				61.1,
				60.1,
				60.1,
				60,
				59.2,
				58.8,
				58.6,
				58.3,
				58.2,
				58.1,
				57.8,
				57.6,
				56.8,
				56.8,
				55.1,
				53.2,
				52.9,
				51.4,
				51,
				50.5,
				49.7,
				49.6,
				49.5,
				49.5,
				48.8,
				48.3,
				47.7,
				46.7,
				46.3,
				43.7,
				42.0,
				39.8,
				39.3,
				38.1,
				31.2],
			name: 'School Performance Profile (SPP) Score'
		}]

	});
});