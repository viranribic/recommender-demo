import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './token.interceptor';
import {ModalModule} from '../modals/modal.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,
    ModalModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('id_token'),
        whitelistedDomains: [  /^null$/  ], // ['localhost'],
        // blacklistedRoutes: ['localhost:8000/api-token-auth/']
      }
    })
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}]
})
export class AuthModule {}
