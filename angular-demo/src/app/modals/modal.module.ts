import {NgModule} from '@angular/core';
import {LoginErrorModalComponent} from './login-error-modal/login-error-modal.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LoginErrorModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LoginErrorModalComponent
  ]
})
export class ModalModule {}
