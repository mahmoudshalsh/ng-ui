import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoute } from './app.route';

import { HomeComponent, PageNotFoundComponent, LoginComponent,
     CategoryComponent, ProductComponent, RegisterComponent } from './_components';
import { FooterComponent, HeaderComponent, NavbarComponent } from './_directives';
import { AuthGuard } from './_guards';
import { SharedModule } from './_modules';
import { ProductService, AuthenticationService } from './_services';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
        HomeComponent,
        PageNotFoundComponent,
        ProductComponent,
        CategoryComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        AppRoute
    ],
    providers: [
        AuthenticationService,
        ProductService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
