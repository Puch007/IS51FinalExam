import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { Subject } from 'rxjs';
import { LocalStorageService } from '../localStorageService';

export interface IUser {
  Id?: number;
  username: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser = {username: '', password: ''};
  localStorageService: any;

  constructor(private router: Router, private toastService: ToastService) {
  }

  ngOnInit() {

  }
  login(user: IUser ) {
    console.log('from login user: ', user);
    const defaultUser: IUser = {username: 'jose', password: 'jose123'};
    if (user.username != null && user.password != null) {
      if (user.username === defaultUser.username && user.password === defaultUser.password){

    }this.localStorageService.saveItemsToLocalStorage(user);
    this.router.navigate(['cart', user]);
  } else {
    this.toastService.showToast('danger', 15000, 'Login Failed! Please check your username or password');

  }

}}
