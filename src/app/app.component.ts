import { Component } from '@angular/core';
import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'health-challenge-tracker';
  users: any[] = [];

  constructor(private workoutService: WorkoutService) {}

  onNewWorkout(workout: { name: string; type: string; minutes: number }) {
    let user = this.users.find(u => u.name === workout.name);
    if (!user) {
      user = { name: workout.name, workouts: [] };
      this.users.push(user);
    }
    user.workouts.push({ type: workout.type, minutes: workout.minutes });
    this.workoutService.updateUser(user);
  }
}
