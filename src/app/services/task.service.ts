import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http = inject(HttpClient);
  constructor() {}

  getTasks(): Observable<any> {
    // return this.http.get(`${environment.ApiUrl}/tasks`);
    return this.http.get('http://localhost:4410/tasks');
  }
}
