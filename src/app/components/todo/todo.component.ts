import { Component, input, inject, OutputEmitterRef, output } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  imports: [],
  template: `
    <input type="checkbox" name="" id="" [checked]="todo().checked" (change)="toggleComplete()">
    <p [style.text-decoration]="todo().checked ? 'line-through' : 'none'">{{ todo().content }}</p>
  <button (click)="deleteTodo()">X</button>`,
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  protected todoService = inject(TodoService);
  protected todoListe = this.todoService.todoListe;

  readonly todo = input.required<Todo>()

  readonly clickChange = output<number>();

  deleteTodo(): void {
    this.clickChange.emit(this.todo().id);
  }

  toggleComplete(): void {
    this.todo().checked = !this.todo().checked;
  }
}
