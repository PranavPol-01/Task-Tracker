import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { TaskService } from '../../services/task.service';
// import {TASKS} from '../../mock-tasks';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{

  tasks:Task[] = [];
  constructor(private taskService : TaskService){}
 
  ngOnInit(): void {
      // this.taskService.getTasks().subscribe((tasks)=>this.tasks= tasks );
      this.taskService.getTasks().subscribe((tasks: any)=>{
        console.log(tasks);
        this.tasks = tasks;
      })
  }

}
