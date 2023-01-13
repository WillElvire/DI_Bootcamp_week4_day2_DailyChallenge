import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  user: User = {
    name: "Wilfried",
    prenom: "Koua",
    email: "koua.eelvire@gmail.com",
    profilePictureUrl: "https://www.universityofcalifornia.edu/sites/default/files/black-man-suit.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

  getFullName() {
    return `${this.user.name} ${this.user.prenom}`;
  }
}
