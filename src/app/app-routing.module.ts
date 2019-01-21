import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guards';
import { AdminGuard } from './guards/auth/admin.guard'

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [
      AuthGuard,
      AdminGuard
    ],

    children: [
      {
        path: '',
        component: AdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }