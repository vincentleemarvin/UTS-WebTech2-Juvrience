import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMatkulComponent } from './form-matkul.component';

describe('FormToDoListComponent', () => {
  let component: FormMatkulComponent;
  let fixture: ComponentFixture<FormMatkulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMatkulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMatkulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
