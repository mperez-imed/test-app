import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  users: any;
  error: any;

  constructor(public api: ApiService) {
    this.users = [];
    this.error = '';
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.api.loadUsers()
      .subscribe(
        (data) => { this.users = data },
        (error) => { this.error = error }
      );
  }

}
