var abc = document.getElementById('orderChart').getContext('2d');
var orderChart = new Chart(abc, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'Pedidos enviados',
      data: [13, 19, 9, 13, 6, 3, 7],
      backgroundColor: "rgba(26, 100, 156,0.6)"
    }, {
      label: 'Pedidos realizados ',
      data: [5, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(71, 175, 225,0.4)"
    }]
  }
});

 

var def = document.getElementById("ticketChart").getContext('2d');
var ticketChart = new Chart(def, {
  type: 'horizontalBar',
  data: {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre",  "Noviembre", "Diciembre"],
    datasets: [{
      label: 'Metrica importante',
      data: [169, 174, 195, 187, 140, 150, 189, 210, 175, 150, 193,139],
      backgroundColor: [
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)',
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)',
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)',
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)',
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)',
        'rgba(26, 100, 156,0.6)',
        'rgba(71, 175, 225,0.4)'
      ]
    }]
  }
});