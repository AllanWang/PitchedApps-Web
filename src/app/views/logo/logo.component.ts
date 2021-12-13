import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('logoContainer')
  logoContainer?: ElementRef;

  @Input() logoColor?: string;

  @Input() animateHome?: boolean;

  ngAfterViewInit() {
    console.log("After init")
    console.log(this.logoContainer?.nativeElement?.offsetHeight)
  }

  mouseEnter() {
    console.log("Mouse over")
  }

  mouseLeave() {
    console.log("Mouse out")
  }

}
