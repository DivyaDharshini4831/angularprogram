import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDir } from './attribute-dir';

describe('AttributeDir', () => {
  let component: AttributeDir;
  let fixture: ComponentFixture<AttributeDir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
