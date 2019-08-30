import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

import { LoggedInProfile } from '../LoggedInProfile';
import { Profile } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedInProfile: LoggedInProfile;
  userId: string;
  dbProf: Profile;

  constructor(public auth: AuthService, public userInfo: UserService) { }

  async ngOnInit() {
    this.userInfo.getUserByUsername('tamulavage').subscribe(x => this.dbProf = x);
  }

}
