import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import {LocalStorageService} from '../localStorageService';
import {IUser} from '../login/login.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  localStorageService: any;

  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    const currentUser = this.localStorageService.getItemsFromLocalStoarage('user');
    if (currentUser != null){
      this.router.navigate(['login']);
    }
  }

}
