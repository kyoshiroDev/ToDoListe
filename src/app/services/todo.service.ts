import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  protected id: number = 0
  readonly todoListe = signal<Todo[]>([])

  getAll(): Todo[] {
    return this.todoListe();
  }

  addTodo(formData: Todo):void {
    if(!formData.content || formData.content.trim() === ''){
      alert('La saisie ne peut pas être vide !')
    }

    formData = {
      id: this.id ++,
      content: formData.content.trim(),
      checked: false
    };
    this.todoListe.update(todos => [...todos, formData]);
  }

  deleteTodo(todoId: Todo["id"]): void {
    this.todoListe.update(todos => 
      todos.filter(todo => todo.id !== todoId)
    );
  }
}
