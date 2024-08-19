const sidebar = document.querySelector(`.sidebar`);

document.getElementById(`sb-btn`).onclick = function (){
    if(sidebar.style.display == "block"){
        sidebar.style.display = `none`;
    }else{
        sidebar.style.display = "block";
    }
}
document.getElementById(`cls-btn`).onclick = function (){
    if(sidebar.style.display == "block"){
        sidebar.style.display = `none`;
    }
}

const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              label: 'Sample',
              data: [12, 19, 6, 15, 2, 13],
              backgroundColor:[
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
            ],
              borderWidth: 1
            }]
          },
          options: {
            aspectRatio: 2,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        const ctz = document.getElementById('myChart-2');
      
        new Chart(ctz, {
          type: 'doughnut',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              label: 'Sample',
              data: [12, 19, 6, 15, 2, 13],
              backgroundColor:[
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
            ],
              borderWidth: 1
            }]
          },
          options: {
            aspectRatio: 2,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });