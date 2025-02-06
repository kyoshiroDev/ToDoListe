import { Component, signal } from '@angular/core';
import { TodolistComponent } from './components/todolist/todolist.component';
import { FormtodoComponent } from './components/formtodo/formtodo.component';

@Component({
  selector: 'app-root',
  imports: [TodolistComponent, FormtodoComponent],
  template: `
  <h1>{{ title() }}</h1>
    <main>
      <app-formtodo />
     <app-todolist />
    </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal<string>('Ma Super App Todo')
}
