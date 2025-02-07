import { Component, inject } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todolist',
  imports: [TodoComponent],
  template: `
    @for(todo of todoListe(); track todo.id){
      <app-todo [todo]="todo" (clickChange)="deleteTodo($event)"/>
    } @empty {
      <h2>Tu as aucune tâches a faire relaxe !</h2>
      <img src="./relaxe.webp" alt="bonhomme drôle sur un transat">
    }
  `,
  styles: `
  :host{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width:100%;

    h2{
      text-align:center;
    }

    img{
      width: 70%;
      max-width: 500px;
    }
}`
})
export class TodolistComponent {
  protected todoService = inject(TodoService);
  protected todoListe = this.todoService.todoListe;

  deleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId);
  }
}
