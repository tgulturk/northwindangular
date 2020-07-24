import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  login() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.userService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(data => {
      this.router.navigateByUrl("/product");
    },
      error => {
        this.notification.error("HATA", "Kullanıcı adı veya şifre geçersiz.");
      })
  }

}
