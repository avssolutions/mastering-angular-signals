import {
  Component,
  EventEmitter,
  input,
  Input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { DomainService } from '../../services/domain.service';
import { Person } from '../inputs.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////
  // Regular variables (non-signal approach)
  @Input() person!: Person;

  ngOnInit(): void {}

  incrementPersonAge(): void {
    this.person.age += 1;
  }

  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////
  // //Input signals (signal approach) problem!!
  // person = input.required<Person>();

  // incrementPersonAge(): void {
  // // Update value of input signal???
  // this.person.update((person: Person) => person.age + 1);
  // }

  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////
  // // Input signals (signal approach) one soluion!
  // person = input.required<Person>();
  // updatedPerson = signal<Person | null>(null);
  // personChanged = output<Person>();

  // ngOnInit(): void {
  //   this.updatedPerson.set(this.person());
  // }

  // incrementPersonAge(): void {
  //   this.updatedPerson.update((person) => {
  //     if (person) {
  //       const updatedPerson = { ...person, age: person.age + 1 };
  //       this.personChanged.emit(updatedPerson);
  //       return updatedPerson;
  //     }
  //     return person;
  //   });
  // }

  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////
  // // Input signals (signal approach) second solution service!
  // person!: Person;

  // constructor(private domainService: DomainService) {}

  // ngOnInit(): void {
  //   this.person = this.domainService.person;
  // }

  // incrementPersonAge(): void {
  //   this.domainService.incrementPersonAge();
  // }
}
