import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginErrorModalComponent} from '../../modals/login-error-modal/login-error-modal.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('modal') modal: LoginErrorModalComponent;

  public errorMessage: string;


  constructor(private authService: AuthService, private  router: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;

    // this.authService.signup(username, email, password).subscribe(
    //   () => {
    //     console.log('User has signed up.');
    //     this.router.navigate(['/login']);
    //   },
    //   (error) => {
    //     this.errorMessage = 'There was an error in the registration process. \nPlease provide valid information.';
    //     this.modal.show();
    //   }
    // );
  }

}
