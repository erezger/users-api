import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {UsersRoutingModule} from '@app/modules/users/users-routing.module';
import {ToastrModule} from 'ngx-toastr';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UsersRoutingModule.components],
  imports: [
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      newestOnTop: true,
      progressBar: true,
    }),
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgSelectModule,
    NgbDatepickerModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsModule,
  ],
  providers: [CookieService],
})

export class UsersModule {
}
