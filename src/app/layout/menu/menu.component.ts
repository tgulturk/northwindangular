import { User } from './../../core/models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }

  ngOnInit(): void {
  }
  logout() {
    this.userService.logout();
  }

}
