import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent {
  @Output() newWorkout = new EventEmitter<{ name: string; type: string; minutes: number }>();

  username: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  addWorkout() {
    this.newWorkout.emit({ name: this.username, type: this.workoutType, minutes: this.workoutMinutes });
    this.resetForm();
  }

  resetForm() {
    this.username = '';
    this.workoutType = 'running';
    this.workoutMinutes = 0;
  }
}
