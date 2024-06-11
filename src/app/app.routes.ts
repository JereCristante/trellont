import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: '', loadComponent: ()=> import('./views/home/home.component').then(res=>res.HomeComponent)},
          //{ path: 'new', loadComponent: ()=> import('./views/form-view/form-view.component').then(res=>res.FormViewComponent) },
          //{ path: 'products', loadComponent: ()=> import('./views/products/products.component').then(res=>res.ProductsComponent) },
          //{ path: 'products/:pid', loadComponent: ()=> import('./views/product-details/product-details.component').then(res=>res.ProductDetailsComponent) },
          //{ path: '**', component: NotFoundComponent },
          { path: '**', loadComponent: ()=> import('./views/not-found/not-found.component').then(res=>res.NotFoundComponent)}
        ],
      },
];
