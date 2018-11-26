import { ApiService } from './../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { HelperService } from '../../services/helper/helper.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit{


  constructor(private api:ApiService,private auth:AuthService,public helper:HelperService) { }

//sections
sections
  ngOnInit() {
    this.getSections();

  }

  selectedSection;

  open(content,user?){
    if(user){
      this.selectedSection= user;
    }
    this.helper.openModal(content);
  }


  close(){
    this.helper.closeModal();
  }

  getSections(){
    this.api.getSections().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    })).subscribe(resp=>{
      console.log(resp);
      this.sections =resp;
    })
  }


  submit(e,data){
    e.preventDefault();
    console.log(data);
    this.api.createSection({
      title: data.title,
      image: data.image,
      description: data.description
    }).then(res=>{
        this.helper.closeModal();
        this.helper.showSuccess(`Added!`, `${data.title} added.`)
      },err=>{
        console.log(err);
      })

  }


  deleteSection(id){
    console.log(id);
    this.api.deleteCategory(id).then(resp=>{
      this.helper.showSuccess(`DELETED`, `Category deleted.`);
      this.getSections();
      this.selectedSection ={};
      this.helper.closeModal();

    })
  }

}

