import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm)
  {
    if(form !=null)
    form.reset();
    this.user = {
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: '',

    }

  }

}
