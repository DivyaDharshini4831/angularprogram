import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formvalidating } from './formvalidating';

describe('Formvalidating', () => {
  let component: Formvalidating;
  let fixture: ComponentFixture<Formvalidating>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formvalidating]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formvalidating);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
