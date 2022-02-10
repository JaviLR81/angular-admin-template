import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddStyles]'
})
export class AddStylesDirective implements OnInit {

  element: ElementRef<HTMLElement>;
  @Input() color: string = 'red';

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('Constructor Directiva');
    this.element = el;
  }

  ngOnInit(): void {
    console.log('NgOnInit Directiva');
    this.setColor();
  }

  setColor(): void {
    this.element.nativeElement.style.color = this.color;
  }

}
