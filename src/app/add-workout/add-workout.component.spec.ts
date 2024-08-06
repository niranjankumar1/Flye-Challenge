import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddWorkoutComponent } from './add-workout.component';
import { WorkoutService } from '../workout.service';

interface User {
  name: string;
  // Add other properties if needed
}

describe('AddWorkoutComponent', () => {
  let component: AddWorkoutComponent;
  let fixture: ComponentFixture<AddWorkoutComponent>;
  let workoutService: WorkoutService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWorkoutComponent],
      imports: [FormsModule],
      providers: [WorkoutService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkoutComponent);
    component = fixture.componentInstance;
    workoutService = TestBed.inject(WorkoutService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add workout', () => {
    component.username = 'Test User';
    component.workoutType = 'running';
    component.workoutMinutes = 30;
    component.addWorkout();
    expect(workoutService.getUsers().find((u: User) => u.name === 'Test User')).toBeTruthy();
  });
});
