import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FeatureBaseComponent } from './components/feature-base/feature-base.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavbarComponent, LayoutComponent, FeatureBaseComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
