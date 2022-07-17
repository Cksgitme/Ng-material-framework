import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { LazyLoadAuthGuard } from '../core/guards/lazy-load-auth.guard';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
        { path: 'orders', loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule), canLoad: [LazyLoadAuthGuard] },
        { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule), canLoad: [LazyLoadAuthGuard] }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
