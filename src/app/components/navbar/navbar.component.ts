import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  url: string;
  name: string;

  logged = false;

  constructor(private authService: NavbarService, private authSatate: AngularFireAuth) {
      authSatate.authState.subscribe(res => {
        console.log(res);
        if (res !== null) {
          this.url = res.photoURL;
          this.name = 'Blog de ' + res.displayName;

          this.logged = true;

        } else {
          this.url = './assets/img/faces/avatar.jpg';
          this.name = 'Blog'

        }
      })
    }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
