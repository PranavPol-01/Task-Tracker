import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   title :string = "Task Tracker";
   addTask : string ='';

   toggleAddTask(task:string){
    console.log('first')
    this.addTask=task;
   }

}
