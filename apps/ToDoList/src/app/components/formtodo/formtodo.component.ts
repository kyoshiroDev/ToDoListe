import { Component, inject, signal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-formtodo',
  imports: [ReactiveFormsModule],
  template: `
    <form action="" [formGroup]="todoForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="content" />
      <button type="submit">Ajouter</button>
    </form>
    @if(submit() === false && todoService.getAll().length >= 0){
    <div>
      <p>La saisie ne peut pas être vide !</p>
    </div>
    }
  `,
  styleUrl: './formtodo.component.css',
})
export class FormtodoComponent {
  protected todoService = inject(TodoService);

  protected submit = signal(true);

  protected todoForm: FormGroup = new FormGroup({
    id: new FormControl<number | null>(0),
    content: new FormControl<string | null>(''),
    checked: new FormControl<boolean | null>(false),
  });

  onSubmit(): void {
    const formData = this.todoForm.getRawValue();
    if (!formData.content || formData.content.trim() === '') {
      this.submit.set(false);
    } else {
      this.submit.set(true);
      this.todoService.addTodo(formData);
      this.todoForm.reset();
    }
  }
}
