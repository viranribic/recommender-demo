import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgxImageGalleryComponent} from 'ngx-image-gallery';
import {LoginErrorModalComponent} from '../../modals/login-error-modal/login-error-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('modal') modal: LoginErrorModalComponent;

  public errorMessage = 'Invalid username or password provided. Please try again.';

  constructor(private authService: AuthService, private  router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.login(username, password).subscribe(
      () => {
        console.log('User is logged in.');
        this.router.navigate(['/']);
      },
    (error) => {
        this.modal.show();
      }
    );
  }


}
