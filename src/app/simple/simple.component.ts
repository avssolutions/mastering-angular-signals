import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
})
export class SimpleComponent {
  message = 'Hello!';
  count = 0;

  increment(): void {
    this.count++;
  }

  changeMessage(): void {
    this.message = 'Hello, variables!';
  }

  // message = signal<string>('Hello');
  // count = signal<number>(0);

  // increment(): void {
  //   this.count.update((currentValue) => currentValue + 1);
  // }

  // changeMessage(): void {
  //   this.message.set('Hello, Signals!');
  // }
}
