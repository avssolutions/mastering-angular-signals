import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InputsComponent } from './inputs/inputs.component';
import { RouteName } from './shared/constants';
import { TypesComponent } from './types/types.component';
import { SimpleComponent } from './simple/simple.component';

const routes: Routes = [
  {
    path: RouteName.dashboard,
    component: DashboardComponent,
  },
  {
    path: RouteName.types,
    component: TypesComponent,
  },
  {
    path: RouteName.inputes,
    component: InputsComponent,
  },
  {
    path: RouteName.simple,
    component: SimpleComponent,
  },
  { path: '', redirectTo: RouteName.dashboard, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
