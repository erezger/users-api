import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
// Importing App Component
import {AppComponent} from './app.component';
// Importing modules
import {CoreModule} from '@core/core.module';
import {AppRoutingModule} from '@app/app-routing.module';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {UsersModule} from '@app/modules/users/users.module';
import {NgSelectModule} from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { RootStoreModule } from './root-store/root-store.module';

const components = [AppComponent];

@NgModule({
  declarations: [...components],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    UsersModule,
    ToastrModule.forRoot(),
    RootStoreModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
