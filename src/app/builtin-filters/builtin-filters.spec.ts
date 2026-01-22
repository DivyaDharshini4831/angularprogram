import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinFilters } from './builtin-filters';

describe('BuiltinFilters', () => {
  let component: BuiltinFilters;
  let fixture: ComponentFixture<BuiltinFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltinFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltinFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
