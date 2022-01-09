import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { ItemComponent } from './nav/item/item.component';
import { BasicComponent } from './nav/item/basic/basic.component';
import { ExpandableComponent } from './nav/item/expandable/expandable.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { LogoComponent } from './views/logo/logo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownComponent } from './content/markdown/markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    MainNavComponent,
    ItemComponent,
    BasicComponent,
    ExpandableComponent,
    NotFoundComponent,
    LogoComponent,
    MarkdownComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'notes/comp251', component: MarkdownComponent, data: {markdownSrc: "Comp-251/notes.md"} },
      { path: 'notes/comp273', component: MarkdownComponent, data: {markdownSrc: "Comp-273/notes.md"} },
      { path: 'notes/comp302', component: MarkdownComponent, data: {markdownSrc: "Comp-302/notes.md"} },
      { path: 'notes/comp303', component: MarkdownComponent, data: {markdownSrc: "Comp-303/notes.md"} },
      { path: 'notes/comp310', component: MarkdownComponent, data: {markdownSrc: "Comp-310/notes.md"} },
      { path: 'notes/comp330', component: MarkdownComponent, data: {markdownSrc: "Comp-330/notes.md"} },
      { path: 'notes/comp360', component: MarkdownComponent, data: {markdownSrc: "Comp-360/notes.md"} },
      { path: 'notes/comp361', component: MarkdownComponent, data: {markdownSrc: "Comp-361/midterm.md"} },
      { path: 'notes/comp409', component: MarkdownComponent, data: {markdownSrc: "Comp-409/notes.md"} },
      { path: 'notes/comp520', component: MarkdownComponent, data: {markdownSrc: "Comp-520/notes.md"} },
      { path: 'notes/comp529', component: MarkdownComponent, data: {markdownSrc: "Comp-529/notes.md"} },
      { path: 'notes/comp550', component: MarkdownComponent, data: {markdownSrc: "Comp-550/notes.md"} },
      { path: 'notes/comp551', component: MarkdownComponent, data: {markdownSrc: "Comp-551/notes.md"} },
      { path: 'notes/comp558', component: MarkdownComponent, data: {markdownSrc: "Comp-558/notes.md"} },
      { path: '**', component: NotFoundComponent },
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
