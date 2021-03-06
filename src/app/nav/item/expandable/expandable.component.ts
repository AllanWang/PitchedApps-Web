import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss', '../item.component.scss']
})
export class ExpandableComponent {

  @Input() title?: string;

  @Input() router?: string;

  @Input() children?: Child[];

}

export type Child = {
  title: string
  router: string
}