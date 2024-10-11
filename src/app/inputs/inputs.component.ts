import { Component, OnInit, signal } from '@angular/core';
import { DomainService } from '../services/domain.service';

export interface Person {
  name: string;
  lastName: string;
  age: number;
}

export const initialPerson: Person = {
  name: 'John',
  lastName: 'Doe',
  age: 10,
};

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
})
export class InputsComponent {
  person = signal<Person>(initialPerson);

  // constructor(private domainService: DomainService) {}

  // ngOnInit(): void {
  //   this.domainService.createPerson(this.person());
  // }

  // onPersonChanged(updatedPerson: Person): void {
  //   this.person.update(() => updatedPerson);
  // }
}
