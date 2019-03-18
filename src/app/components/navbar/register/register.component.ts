import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: NavbarService) { }

  ngOnInit() {
  }

  register() {

    const mail = (document.getElementById('mail') as HTMLInputElement).value;
    const pass = (document.getElementById('pass') as HTMLInputElement).value;


    if (mail || pass != '') {
      this.registerService.signup(mail, pass).then(res => {
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
