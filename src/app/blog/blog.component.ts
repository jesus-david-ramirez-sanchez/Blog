import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../components/navbar/navbar.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    // this.authService.login(email, password);
    // this.authService.login('jesusdavidramirezsanchez@gmail.com',  '123456789');
  }

}
