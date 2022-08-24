import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpcproComponent } from './newpcpro.component';

describe('NewpcproComponent', () => {
  let component: NewpcproComponent;
  let fixture: ComponentFixture<NewpcproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpcproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpcproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
