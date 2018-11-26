import { ApiService } from './../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { HelperService } from '../../services/helper/helper.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {


  constructor(private api:ApiService,private auth:AuthService,public helper:HelperService) { }

//ads
ads:any;
categories;
  ngOnInit() {
    this.getads();

  }

  selectedAd;

  open(content,user?){
    if(user){
      this.selectedAd= user;
    }
    this.helper.openModal(content);
  }


  close(){
    this.helper.closeModal();
  }

  getads(){
    this.api.getAds().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    })).subscribe(resp=>{
      console.log(resp);
      this.ads =resp;
    })
  }


  submit(e,data){
    e.preventDefault();
    console.log(data);
    this.auth.signup(data.email, data.password).then(resp=>{
      this.api.createUser(resp.user.uid, {
        name: data.name,
        email:data.email,
        phone:data.phone,
        address:data.address,
        city:data.city,
        country:data.country
      }).then(res=>{
        this.helper.closeModal();
        this.helper.showSuccess(`Added!`, `${data.name} added.`)
      },err=>{
        console.log(err);
      })
    },err1=>{
      console.log(err1)
    })
  }


  deleteUser(uid){
    this.api.deleteUser(uid).then(resp=>{
      this.helper.closeModal();
      this.helper.showSuccess(`DELETED`, `User deleted.`)
    })
  }




  selectedCategory;
  onChange(e){
    let obj=JSON.parse(e);
    this.selectedCategory = { title:obj.title, id:obj.id, sectionId: obj.sectionId, sectionName: obj.sectionName};
    console.log(this.selectedCategory);
  }

}
