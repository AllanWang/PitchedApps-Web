import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent as NgxMarkdownComponent, MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {

  private static BASE_URL = "https://raw.githubusercontent.com/AllanWang/McGill-Public/dev"
  private static ABSOLUTE_URL_REGEX = "(?:^[a-z][a-z0-9+\.-]*:|\/\/)"

  constructor(
    private markdownService: MarkdownService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  markdownFullSrc: string = "";
  private markdownBaseUrl: string = "";

  @ViewChild(NgxMarkdownComponent, { read: ElementRef })
  markdownRef?: ElementRef;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.loadMarkdown(data as RouterData)
    })
  }

  private loadMarkdown(data: RouterData) {
    console.log(`markdown activated`, data)

    this.markdownFullSrc = `${MarkdownComponent.BASE_URL}/${data.markdownSrc}`
    this.markdownBaseUrl = this.markdownFullSrc.substring(0, this.markdownFullSrc.lastIndexOf('/'));

    // https://github.com/jfcere/ngx-markdown/issues/149

    const defaultImageRenderer = this.markdownService.renderer.image
    this.markdownService.renderer.image = (href: string | null, title: string | null, text: string) => {
      if (!href?.match(MarkdownComponent.ABSOLUTE_URL_REGEX))
        href = `${this.markdownBaseUrl}/${href}`
      return defaultImageRenderer.call(this.markdownService.renderer, href, title, text)
    }

    const defaultLinkRenderer = this.markdownService.renderer.link
    this.markdownService.renderer.link = (href: string | null, title: string | null, text: string) => {
      if (!href?.match(MarkdownComponent.ABSOLUTE_URL_REGEX))
        href = `${this.markdownBaseUrl}/${href}`
      return defaultLinkRenderer.call(this.markdownService.renderer, href, title, text)
    }

    this.cdr.detectChanges();
  }

}

type RouterData = {
  markdownSrc: string
}
