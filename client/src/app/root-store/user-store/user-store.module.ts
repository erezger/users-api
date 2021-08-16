import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userReducer } from './reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreEffects } from './effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserStoreEffects])
  ]
})
export class UserStoreModule { }
