import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['/register']);
  }
  login(username, password) {
    let passwordHash = Md5.hashStr(password);
    //this.userService(username, passwordHash);
  }
  getUrl() {
    return "/bg-01.jpg')";
  }
}
