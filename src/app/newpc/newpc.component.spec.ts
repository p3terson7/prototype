import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpcComponent } from './newpc.component';

describe('NewpcComponent', () => {
  let component: NewpcComponent;
  let fixture: ComponentFixture<NewpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
