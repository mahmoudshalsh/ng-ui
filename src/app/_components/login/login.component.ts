import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['.has-error .help-block{color: #a94442;}']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.auth.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.auth.login(this.model.username, this.model.password)
      .subscribe(
      date => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log(error);
        this.loading = false;
      });
  }
}
