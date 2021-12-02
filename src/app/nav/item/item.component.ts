import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Child } from './expandable/expandable.component';

@Component({
  selector: 'app-nav-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent {

  @Input() title?: string;

  @Input() router?: string;

  @Input() children?: Child[];

}
