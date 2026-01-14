import { Directive, ElementRef, HostListener } from '@angular/core';
import { Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class Highlight {
  @Input() appHighlight='';
  


  constructor(private el: ElementRef) {
    console.log('Highlight directive instantiated for element:', this.el?.nativeElement?.tagName);
     }
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');

  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
