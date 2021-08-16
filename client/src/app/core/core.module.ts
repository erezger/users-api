/**
 * @module CoreModule
 * @description
 * This is a core module of the application.
 * It is used to include the dependencies that was loaded only one time across the application
 */

import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Preventing this module only once
import { EnsureModuleLoadedOnceGuard } from '@app/core/EnsureModuleLoadedOnceGuard';

// Importing custom http interceptors
import { ErrorHandlerInterceptor } from '@interceptors/error-handler.interceptor';
import { ApiPrefixInterceptor } from '@interceptors/api-prefix.interceptor';
import { HttpTokenInterceptor } from '@interceptors/http.token.interceptor';
import { CommonHttpService } from '@core/services/common-http.service';
import { UserService } from './services/user.service';
import { CommonService } from './services/common.service';

// Adding the http interceptors providers and services
const providers = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpTokenInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiPrefixInterceptor,
    multi: true,
  },
  CommonHttpService,
  UserService,
  CommonService,
];

/** @module core */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [...providers],
  exports: [HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    super(parentModule);
  }
}
