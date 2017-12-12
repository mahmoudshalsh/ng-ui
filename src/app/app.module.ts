import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoute } from './app.route';

import { SharedModule } from './_modules';
import { FooterComponent, HeaderComponent, NavbarComponent } from './_directives';
import { HomeComponent, PageNotFoundComponent, CategoryComponent, ProductComponent } from './_components';
import { ProductService } from './_services';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
        HomeComponent,
        PageNotFoundComponent,
        ProductComponent,
        CategoryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        AppRoute
    ],
    providers: [
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
