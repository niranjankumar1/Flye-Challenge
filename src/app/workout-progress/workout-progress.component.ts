import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-workout-progress',
  templateUrl: './workout-progress.component.html',
  styleUrls: ['./workout-progress.component.css']
})
export class WorkoutProgressComponent implements OnInit {
  @Input() users: any[] = [];

  ngOnInit(): void {
    this.createCharts();
  }

  createCharts() {
    this.users.forEach(user => {
      setTimeout(() => {  // Adding timeout to ensure DOM elements are available
        this.createChart(user);
      }, 0);
    });
  }

  createChart(user: any) {
    const ctx = document.getElementById(`chart-${user.id}`) as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: user.workouts.map((workout: any) => workout.type),
          datasets: [{
            label: 'Workout Minutes',
            data: user.workouts.map((workout: any) => workout.minutes),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: this.getChartOptions()
      });
    }
  }

  getChartOptions(): ChartOptions {
    return {
      responsive: true,
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              return `${context.label}: ${context.raw} minutes`;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      }
    };
  }
}
