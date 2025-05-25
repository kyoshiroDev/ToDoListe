import {
  Component,
  input,
  inject,
  OutputEmitterRef,
  output,
} from '@angular/core';
import { NgStyle } from '@angular/common';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  imports: [NgStyle],
  template: `
    <div
      class="container"
      [ngStyle]="{
        'background-color': todo().checked ? 'lightgrey' : 'transparent'
      }"
    >
      <input
        type="checkbox"
        [checked]="todo().checked"
        (change)="toggleComplete()"
      />
      <p
        [ngStyle]="{'text-decoration': todo().checked ? 'line-through' : 'none',}"
      >
        {{ todo().content }}
      </p>
      <button (click)="deleteTodo()">X</button>
    </div>
  `,

  styleUrl: './todo.component.css',
})
export class TodoComponent {
  protected todoService = inject(TodoService);
  protected todoListe = this.todoService.todoListe;

  readonly todo = input.required<Todo>();

  readonly clickChange = output<number>();

  deleteTodo(): void {
    this.clickChange.emit(this.todo().id);
  }

  toggleComplete(): void {
    this.todo().checked = !this.todo().checked;
  }
}
