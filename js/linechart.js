const line = document.getElementById('linechart');

  new Chart(line, {
    type: 'line',
    data: {
      labels: ['Hardware', 'Software', 'Licenses', 'User', 'Active', 'Expire'],
      datasets: [{
        label: 'Asset Line Chart',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });