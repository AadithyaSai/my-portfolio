import { Component, ElementRef, viewChildren } from '@angular/core';
import { gsap, ScrollTrigger } from '../utils/gsap';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'portfolio-header',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(protected element: ElementRef) {
    this.element = element;
  }

  items = viewChildren('item', { read: ElementRef });

  ngAfterViewInit() {
    const items = this.items().map((item) => item.nativeElement);
    const loadTl = gsap.timeline({
      delay: 0.5,
      defaults: {
        duration: 1,
      },
    });

    loadTl.from(items.reverse(), {
      y: 25,
      opacity: 0,
      stagger: 0.2,
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: this.element.nativeElement,
        start: 'top -1000',
        end: '+=1000',
        toggleActions: 'play none reverse reverse',
      },
    });

    scrollTl.to(this.element.nativeElement, {
      opacity: 0,
      y: -100,
    });
  }
}
