let keys = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J'
];
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
            document.getElementById('msg').innerHTML = "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E! " + index + '/10';
        } else {
            document.getElementById('msg').innerHTML = "\u0422\u0418 \u041F\u0415\u0420\u0415\u041C\u0406\u0413! \uD83C\uDF89";
            document.getElementById('key').innerHTML = "\u2713";
        }
    } else document.getElementById('msg').innerHTML = "\u041F\u041E\u041C\u0418\u041B\u041A\u0410! \u041F\u043E\u0442\u0440\u0456\u0431\u043D\u0430: " + keys[index];
});
startGame();
// ---------------- Chart.js ----------------
const chartData = {
    labels: Array.from({
        length: 30
    }, (_, i)=>(i + 1).toString()),
    datasets: [
        {
            label: "\u041F\u0440\u043E\u0434\u0430\u0436\u0456 \u0437\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043C\u0456\u0441\u044F\u0446\u044C",
            data: [
                150,
                220,
                180,
                200,
                250,
                300,
                280,
                350,
                400,
                380,
                420,
                450,
                500,
                550,
                600,
                650,
                700,
                750,
                800,
                850,
                900,
                950,
                1000,
                1050,
                1100,
                1150,
                1200,
                1250,
                1300,
                1350
            ],
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            borderColor: "#2196f3",
            borderWidth: 2,
            fill: true,
            tension: 0.3
        }
    ]
};
const config = {
    type: "line",
    data: chartData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432 \u0437\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043C\u0456\u0441\u044F\u0446\u044C",
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
                    text: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432"
                }
            },
            x: {
                title: {
                    display: true,
                    text: "\u0414\u043D\u0456 \u043C\u0456\u0441\u044F\u0446\u044F"
                }
            }
        }
    }
};
const ctx = document.getElementById("sales-chart");
new Chart(ctx, config);

//# sourceMappingURL=framework.44983732.js.map
