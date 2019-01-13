import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityDeleteComponent } from './personality-delete.component';

describe('PersonalityDeleteComponent', () => {
  let component: PersonalityDeleteComponent;
  let fixture: ComponentFixture<PersonalityDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalityDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
