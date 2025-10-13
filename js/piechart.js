const pie = document.getElementById('pieChart');

  new Chart(pie, {
    type: 'pie',
    data: {
    //   labels: ['Hardware', 'Software', 'Licenses', 'User', 'Active', 'Expire'],
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
