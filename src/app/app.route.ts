import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, PageNotFoundComponent, CategoryComponent, ProductComponent, LoginComponent, RegisterComponent } from './_components';
import { AuthGuard } from './_guards/index';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent },
    { path: 'Category', component: CategoryComponent },
    { path: 'Product', component: ProductComponent, canActivate: [AuthGuard] },
    // { path: '**', component: PageNotFoundComponent }
];

export const AppRoute = RouterModule.forRoot(routes);
