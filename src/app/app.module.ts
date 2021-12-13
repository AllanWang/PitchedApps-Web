import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { ItemComponent } from './nav/item/item.component';
import { BasicComponent } from './nav/item/basic/basic.component';
import { ExpandableComponent } from './nav/item/expandable/expandable.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { LogoComponent } from './views/logo/logo.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'products/:productId', component: ProductDetailsComponent },
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
