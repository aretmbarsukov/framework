let keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let index = 0;

function startGame() {
    index = 0;
    document.getElementById('score').innerHTML = '0';
    document.getElementById('key').innerHTML = keys[0];
    document.getElementById('msg').innerHTML = '';
}

document.addEventListener('keydown', function(e) {
    let key = e.key.toUpperCase();
    
    if (key === keys[index]) {
        index++;
        document.getElementById('score').innerHTML = index;
        if (index < 10) {
            document.getElementById('key').innerHTML = keys[index];
            document.getElementById('msg').innerHTML = 'Правильно! ' + index + '/10';
        } else {
            document.getElementById('msg').innerHTML = 'ТИ ПЕРЕМІГ! 🎉';
            document.getElementById('key').innerHTML = '✓';
        }
    } else {
        document.getElementById('msg').innerHTML = 'ПОМИЛКА! Потрібна: ' + keys[index];
    }
});

startGame();

// ---------------- Chart.js ----------------
const chartData = {
  labels: Array.from({length: 30}, (_, i) => (i+1).toString()),
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380,
        420, 450, 500, 550, 600, 650, 700, 750, 800, 850,
        900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350
      ],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: true,
      tension: 0.3
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Статистика продажів за останній місяць",
        font: {
          size: 18,
          weight: "bold"
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Кількість продажів"
        }
      },
      x: {
        title: {
          display: true,
          text: "Дні місяця"
        }
      }
    }
  }
};

const ctx = document.getElementById("sales-chart");
new Chart(ctx, config);
