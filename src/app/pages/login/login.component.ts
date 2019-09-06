import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
  }

  public login(): void {
    let fulluser = btoa(this.username.concat(this.password));
    this.localStorageService.create('user', fulluser);
    this.router.navigateByUrl('/home');
  }

}
