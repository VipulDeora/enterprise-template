import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullPageLayoutPage} from '../../../../../../Projects/Logger/ui/src/app/full-page-layout/full-page-layout.page';
import {LoginGuard} from '../../../../../../Projects/Logger/ui/src/app/shared/guards/login.guard';

const fullPageRoutes: Routes = [
  {
    path: '',
    component: FullPageLayoutPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      // {
      //   path: 'login',
      //   canLoad: [LoginGuard],
      //   loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      // },
      // {
      //   path: 'register',
      //   loadChildren: () => import('../pages/register/register.module').then(m => m.RegisterPageModule)
      // }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(fullPageRoutes)],
  exports: [RouterModule]
})
export class FullPageLayoutRoutingModule { }
