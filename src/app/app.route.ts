import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, PageNotFoundComponent, CategoryComponent, ProductComponent } from './_components';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Category', component: CategoryComponent },
    { path: 'Product', component: ProductComponent },
    // { path: '**', component: PageNotFoundComponent }
];

export const AppRoute = RouterModule.forRoot(routes);
