import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDir } from './component-dir';

describe('ComponentDir', () => {
  let component: ComponentDir;
  let fixture: ComponentFixture<ComponentDir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
