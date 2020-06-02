import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TwoColumnLayoutPage} from '../../../../../../Projects/Logger/ui/src/app/two-column-layout/two-column-layout.page';


const routes: Routes = [
  {
    path: '',
    component: TwoColumnLayoutPage,
    children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoColumnLayoutRoutingModule { }
