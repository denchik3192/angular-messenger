import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RegisterRequestModel } from '../../model/auth.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {
  user: RegisterRequestModel = {
    username: '',
    mail: '',
    password: '',
  };

  constructor(private auth: AuthService, private router: Router) { }

  register() {
    if (this.user && this.user.mail && this.user.password && this.user.username) {
      this.auth.register(this.user).subscribe(() => {
        this.router.navigateByUrl('/');
      })
    }
  }
}
