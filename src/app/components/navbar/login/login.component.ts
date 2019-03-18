import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private login: NavbarService) { }

  ngOnInit() {
  }

  loggin() {

    const mail = (document.getElementById('mail') as HTMLInputElement).value;
    const pass = (document.getElementById('pass') as HTMLInputElement).value;


    if (mail || pass != '') {
      this.login.login(mail, pass).then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);
        alert(error);
      })
    } else {
      alert('llena bien las casillas');
    }
  }

}
