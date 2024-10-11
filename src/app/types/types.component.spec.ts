import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypesComponent } from './types.component';

// fdescribe('TypesComponent', () => {
//   let component: TypesComponent;
//   let fixture: ComponentFixture<TypesComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [TypesComponent],
//     });
//     fixture = TestBed.createComponent(TypesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     // GIVEN
//     // WHEN
//     // THEN
//     expect(component).toBeTruthy();
//   });

describe('TypesComponent testing effects', () => {
  let component: TypesComponent;
  let fixture: ComponentFixture<TypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypesComponent],
    });
    fixture = TestBed.createComponent(TypesComponent);
    component = fixture.componentInstance;
    component.count.set(0);
    component.message.set('Hello, Variables');
    fixture.detectChanges();
  });

  it('should create', () => {
    // GIVEN
    // WHEN
    // THEN
    expect(component.doubleCount()).toEqual(0);
    expect(component).toBeTruthy();
  });

  it('should call changeMessage ', () => {
    // GIVEN
    // WHEN
    component.changeMessage();
    // THEN
    expect(component.message()).toEqual('Hello, Signals!');
  });

  it('should call increment ', () => {
    // GIVEN
    // WHEN
    component.increment();
    // THEN
    expect(component.count()).toEqual(1);
    expect(component.doubleCount()).toEqual(component.count() * 2);
  });

  it('should set shouldOpen based on roles array', () => {
    // GIVEN
    component.roles = ['delete', 'close'];
    component.shouldOpen.update(() =>
      component.roles.some((r) => r === 'open')
    );
    // WHEN
    // THEN
    expect(component.shouldOpen()).toBeFalse();

    // GIVEN
    component.roles = ['delete', 'open'];
    component.shouldOpen.update(() =>
      component.roles.some((r) => r === 'open')
    );
    // WHEN
    // THEN
    expect(component.shouldOpen()).toBeTrue();
  });

  it('should log effect when count changes', () => {
    // GIVEN
    const consoleSpy = spyOn(console, 'log');
    // WHEN
    component.increment();
    fixture.detectChanges();
    // THEN
    expect(consoleSpy).toHaveBeenCalledWith('Count is now: ', 1);
  });
});
