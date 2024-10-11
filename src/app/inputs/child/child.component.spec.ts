import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { initialPerson } from '../inputs.component';
import { Person } from '../../services/domain.service';

// fdescribe('ChildComponent variables (non-signal approach)', () => {
//   let component: ChildComponent;
//   let fixture: ComponentFixture<ChildComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ChildComponent],
//     });
//     fixture = TestBed.createComponent(ChildComponent);
//     component = fixture.componentInstance;
//     component.number = 0;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     // GIVEN
//     // WHEN
//     // THEN
//     expect(component).toBeTruthy();
//   });

//   it('should call increment ', () => {
//     // GIVEN
//     // WHEN
//     component.increment();
//     // THEN
//     expect(component.number).toEqual(1);
//   });
// });

fdescribe('ChildComponent signal approach one soluion!', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent],
    });
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('person', initialPerson);
    fixture.detectChanges();
  });

  it('should create', () => {
    // GIVEN
    // WHEN
    // THEN
    expect(component).toBeTruthy();
  });

  it('should initialize updatedPerson with input person on ngOnInit', () => {
    // GIVEN
    // WHEN
    component.ngOnInit();
    // THEN
    expect(component.updatedPerson()).toEqual(component.person());
  });

  it('should increment updatedPerson age', () => {
    // GIVEN
    const initialPerson: Person = {
      name: 'John',
      lastName: 'Doe',
      age: 10,
    };
    component.updatedPerson.set(initialPerson);
    // WHEN
    component.incrementPersonAge();
    // THEN
    expect(component.updatedPerson()?.age).toEqual(11);
  });

  it('should incrementPersonAge starting from the input person', () => {
    // GIVEN
    const newPerson: Person = {
      name: 'John',
      lastName: 'Doe',
      age: 3,
    };
    const newPersonUpdated: Person = {
      name: 'John',
      lastName: 'Doe',
      age: 4,
    };
    fixture.componentRef.setInput('person', newPerson);
    component.ngOnInit();
    // WHEN
    component.incrementPersonAge();
    // THEN
    expect(component.updatedPerson()).toEqual(newPersonUpdated);
  });
});
