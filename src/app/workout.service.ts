import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private users: any[] = [];

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    this.users.push(user);
  }

  updateUser(user: any) {
    const index = this.users.findIndex(u => u.name === user.name);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
}
