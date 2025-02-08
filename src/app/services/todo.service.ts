import { Injectable, signal } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly todoListe = signal<Todo[]>([])

  getAll(): Todo[] {
    return this.todoListe();
  }

  addTodo(formData: Todo):void {
    if(!formData.content || formData.content.trim() === ''){
      alert('La saisie ne peut pas être vide !')
    }
    
    formData = {
      id: this.todoListe().length + 1,
      content: formData.content.trim(),
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
