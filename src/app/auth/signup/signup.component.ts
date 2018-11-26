import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router,private api:ApiService) { }

  ngOnInit() {
  }

  err='';
  user={ name:'', email:'', password:'',uid:''}



  // signup(email, password){
  //   this.auth.signup(email, password).then(resp=>{
  //     this.user.uid = resp.user.uid;
  //     resp.user.
  //     this.api.signUp()
  //     this.router.navigate(['/dashboard']);
  //   },err=>{
  //     this.err = err;
  //   })

  // }
}
