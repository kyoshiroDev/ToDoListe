import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-formtodo',
  imports: [ReactiveFormsModule],
  template: `
    <form action="" [formGroup]="todoForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="content">
      <button type="submit">Ajouter</button>
    </form>`,
  styleUrl: './formtodo.component.css'
})
export class FormtodoComponent {
  protected todoService  = inject(TodoService)

  protected todoForm: FormGroup = new FormGroup({
    id: new FormControl <number | null>(0),
    content: new FormControl<string | null>(''),
    checked: new FormControl<boolean | null>(false)
  })

  onSubmit():void {
    const formData = this.todoForm.getRawValue();
    this.todoService.addTodo(formData)
  }

}
