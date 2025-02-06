import { Component, input, inject, OutputEmitterRef, output } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  imports: [],
  template: `
  <div class="container-content">
    <input type="checkbox" name="" id="">
    <p>{{ todo().content }}</p>
  </div>
  <button (click)="deleteTodo()">X</button>`,
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  protected todoService = inject(TodoService);
  protected todoListe = this.todoService.todoListe;

  readonly todo = input.required<Todo>()

  readonly clickChange = output<number>();

  deleteTodo() {
    this.clickChange.emit(this.todo().id);
  }
}
