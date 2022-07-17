import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadAuthGuard } from './core/guards/lazy-load-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./no-auth/no-auth.module').then(m => m.NoAuthModule)    
  },
  {
    path: 'my-app',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule),
    canLoad: [LazyLoadAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
