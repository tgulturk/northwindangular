import { UserService } from './../../services/user.service';
import { User } from './../../core/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  activeUser: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getUser();
  }

}

