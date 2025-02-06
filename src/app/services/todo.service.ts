import { effect, Injectable, signal } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly todoListe = signal<Todo[]>([
    {
      id:1,
      content: "liste de course à faire",
      checked: false
    },
    {
      id:2,
      content: "liste de course à faire",
      checked: false
    },
    {
      id:3,
      content: "liste de course à faire",
      checked: false
    },
    {
      id:4,
      content: "liste de course à faire",
      checked: false
    }
  ])

  getAll(): Todo[] {
    return this.todoListe();
  }

  addTodo(formData: Todo):void {
    formData = {
      id: this.todoListe().length + 1,
      content: formData.content,
      checked: false
    };
    this.todoListe.update(todos => [...todos, formData]);
  }

  deleteTodo(todoId: number): void {
    this.todoListe.update(todos => 
      todos.filter(todo => todo.id !== todoId)
    );
  }
}
