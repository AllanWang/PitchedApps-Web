import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent {

  @Input() title?: string;

  @Input() children?: string[];

}
