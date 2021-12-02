import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['../item.component.scss', './basic.component.scss']
})
export class BasicComponent {

  @Input() title?: string;

  @Input() router?: string;

}
