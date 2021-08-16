/**
 * @module UsersRoutingModule
 * User routing module of the application.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataTableComponent} from '@app/modules/users/components/dataTable/data-table.component';
import {NotFoundComponent} from '@app/modules/users/components/not-found/not-found.component';
import {HeaderComponent} from '@app/modules/users/components/header/header.component';
import { MasterComponent } from './components/master/master.component';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
// defining routes
const routes: Routes = [
  {
    path: '', component: MasterComponent, children: [
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: 'user',
        component: CreateUserComponent,
      },
      {
        path: 'user/:id',
        component: CreateUserComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class UsersRoutingModule {
  static components = [
    UsersComponent,
    CreateUserComponent,
    MasterComponent,
    DataTableComponent,
    NotFoundComponent,
    HeaderComponent,
  ];

  static directives = [];

  static providers = [];

}
