import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';
import {JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './token.interceptor';
import {ModalModule} from '../modals/modal.module';
import {AppSettings} from '../appSettings';


export function getToken() {
  return localStorage.getItem('id_token');
}

const jwtConfig: JwtModuleOptions = {
  config: {
    tokenGetter: getToken,
    whitelistedDomains: [  AppSettings.API_URL, AppSettings.STORAGE_URL, AppSettings.APP_URL  ], // ['localhost'],
    // blacklistedRoutes: ['localhost:8000/api-token-auth/']
  }
};

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,
    ModalModule,
    JwtModule.forRoot(jwtConfig)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}]
})
export class AuthModule {}
