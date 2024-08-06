import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  @Input() workouts: any[] = [];

  searchQuery: string = '';
  filterType: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;
  filteredUsers: any[] = [];
  showTable: Boolean = true;

  ngOnInit(): void {
    this.filterAndPaginateUsers();
  }

  filterAndPaginateUsers(): void {
    let filtered = this.workouts;

    if (this.searchQuery) {
      filtered = filtered.filter(user => user.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

    if (this.filterType) {
      filtered = filtered.filter(user => user.workouts.some((workout: { type: string; }) => workout.type === this.filterType));
    }

    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    this.filteredUsers = filtered.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.filterAndPaginateUsers();
    }
  }

  getUserWorkoutTypes(user: any): string {
    return user.workouts.map((w: { type: string; }) => w.type).join(', ');
  }

  getUserWorkoutCount(user: any): number {
    return user.workouts.length;
  }

  getUserTotalWorkoutMinutes(user: any): number {
    return user.workouts.reduce((acc: number, w: { minutes: number; }) => acc + w.minutes, 0);
  }
  
}
