import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldpcComponent } from './oldpc.component';

describe('OldpcComponent', () => {
  let component: OldpcComponent;
  let fixture: ComponentFixture<OldpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
