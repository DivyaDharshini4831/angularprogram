import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExpression } from './angular-expression';

describe('AngularExpression', () => {
  let component: AngularExpression;
  let fixture: ComponentFixture<AngularExpression>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularExpression]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularExpression);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
