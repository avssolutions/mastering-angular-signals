import { Injectable } from '@angular/core';
import { initialPerson, Person } from '../inputs/inputs.component';

@Injectable()
export class DomainService {
  private _person: Person = initialPerson;

  get person(): Person {
    return this._person;
  }

  createPerson(person: Person): void {
    this._person.name = person.name;
    this._person.lastName = person.lastName;
    this._person.age = person.age;
  }

  incrementPersonAge(): void {
    this._person.age = this._person.age + 1;
  }
}
