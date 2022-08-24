import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpcnoobComponent } from './newpcnoob.component';

describe('NewpcnoobComponent', () => {
  let component: NewpcnoobComponent;
  let fixture: ComponentFixture<NewpcnoobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpcnoobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpcnoobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
