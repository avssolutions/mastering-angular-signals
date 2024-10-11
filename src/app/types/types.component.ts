import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
})
export class TypesComponent {
  // count: number = 0;
  // message: string = 'Hello';
  // doubleCount = this.count * 2;

  // roles = ['open', 'close', 'delete'];
  // get shouldOpen(): boolean {
  //   return this.roles.some((r) => r === 'open');
  // }

  // increment(): void {
  //   this.count++;
  //   this.doubleCount = this.count * 2;
  // }

  // changeMessage(): void {
  //   this.message = 'Hello, Variables!';
  // }

  count = signal<number>(0);
  message = signal<string>('Hello');
  doubleCount = computed(() => this.count() * 2);
  roles = ['open', 'close', 'delete']; // Coming from Auth service
  //  get shouldOpen(): boolean {
  //   return  this.roles.some(r => r === 'openFinc')
  //  }
  // shouldOpen = computed(() => this.roles.some(r => r === 'open'));
  shouldOpen = signal<boolean>(false);

  constructor() {
    this.shouldOpen.update(() => this.roles.some((r) => r === 'open'));
    effect(() => {
      console.log('Count is now: ', this.count());
    });
  }

  increment(): void {
    this.count.update((value) => value + 1);
  }

  changeMessage(): void {
    this.message.set('Hello, Signals!');
  }
}
