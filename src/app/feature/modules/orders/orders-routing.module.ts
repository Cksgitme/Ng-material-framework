import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: '', component: OrderComponent, canActivate: [AuthGuard]},
  {path: 'add-order', component: AddOrderComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
