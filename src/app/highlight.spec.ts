import { Highlight } from './highlight';
import { ElementRef, Renderer2 } from '@angular/core';

describe('Highlight', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const mockRenderer = jasmine.createSpyObj('Renderer2', ['addClass']);
    const directive = new Highlight(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
