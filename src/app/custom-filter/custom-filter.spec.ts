import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilter } from './custom-filter';

describe('CustomFilter', () => {
  let component: CustomFilter;
  let fixture: ComponentFixture<CustomFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
