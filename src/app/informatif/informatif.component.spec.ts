import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatifComponent } from './informatif.component';

describe('InformatifComponent', () => {
  let component: InformatifComponent;
  let fixture: ComponentFixture<InformatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformatifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
