import { NgModule } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {AuthService} from '../auth/auth.service';
import { HomeComponent } from './home/home.component';
import {MatCardModule, MatStepperModule} from '@angular/material';
import {MaterialModule} from '../material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [
    // AppRoutingModule, // TODO uncomment (???)
    HeaderComponent,
    HomeComponent
  ],
  providers: [
    AuthService,
    // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]
})
export class CoreModule {}
