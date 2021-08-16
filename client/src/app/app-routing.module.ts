/**
 * Base routing module of the application.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '@app/modules/users/components/not-found/not-found.component';

// Define the routes

const appRoutes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then((m) => m.UsersModule),
    pathMatch: 'prefix',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users',
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
}
