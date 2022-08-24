import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelOrdinateurComponent } from './nouvel-ordinateur.component';

describe('NouvelOrdinateurComponent', () => {
  let component: NouvelOrdinateurComponent;
  let fixture: ComponentFixture<NouvelOrdinateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelOrdinateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
