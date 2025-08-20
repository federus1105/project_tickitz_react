// charts.js
import Chart from "chart.js/auto";

export function createSalesChart(canvas, data) {
  return new Chart(canvas, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "April", "Mei", "Juni"],
      datasets: [
        {
          label: "Sales",
          data,
          borderWidth: 2,
          fill: true,
          backgroundColor: "",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => `$${value}`,
          },
        },
      },
    },
  });
}
