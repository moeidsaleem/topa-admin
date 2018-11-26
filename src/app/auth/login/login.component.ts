import { Component, OnInit ,NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private zone:NgZone,
     private auth:AuthService) { }

  ngOnInit() {
  }

  user={
    email:'info@admin.com',
    password:'admin123'
  }
  err='';


  signin(){
    console.log(this.user);
    //this.router.navigate(['/dashboard']);




    this.auth.login(this.user.email, this.user.password).then(response=>{
      console.log(response);

      this.router.navigate(['/dashboard'])
    },err=>{
      this.err = err.message,
      console.log(err.message);
      this.user.password ='';
      this.user.email ='';
      setTimeout(()=>       this.err = '',6000)
    })
  }

}
