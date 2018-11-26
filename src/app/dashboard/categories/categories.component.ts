import { ApiService } from './../../services/api/api.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { HelperService } from '../../services/helper/helper.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit  {
  constructor(private api:ApiService,private auth:AuthService,public helper:HelperService) { }
//categories
categories;
sections;
@ViewChild("addcontent", {read: ElementRef}) tref: ElementRef;
  ngOnInit() {
    this.getCategories();
    this.getSections();
  }
  selectedCategory;
  open(content,user?){
    this.getSections();
    if(user){ this.selectedCategory= user }
    this.helper.openModal(content);
  }
  close(){
    this.helper.closeModal();
  }
  getCategories(){
    this.api.getCategories().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    })).subscribe(resp=>{
      console.log(resp);
      this.categories =resp;
    })
  }

  submit(e,data){
    e.preventDefault();
    console.log(data);
    /* adding category stuff */
    this.api.createCategory({
      title: data.title,
      image: data.image,
      description: data.description,
      sectionName : this.selectedSection.title,
      sectionId : this.selectedSection.id,
    }).then(res=>{
      this.selectedSection ={};
      console.log(res);
        this.helper.closeModal();
        this.helper.showSuccess(`Added!`, `${data.name} added.`)
      },err=>{
        console.log(err);
      })

  }


  deleteCategory(id){
    console.log(id);
    this.api.deleteCategory(id).then(resp=>{
      this.helper.showSuccess(`DELETED`, `Category deleted.`);
      this.getCategories();
      this.selectedCategory ={};
      this.helper.closeModal();

    })
  }

  /* SECTION */
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




  selectedSection;
  onChange(e){
    let obj=JSON.parse(e);
    this.selectedSection = { title:obj.title, id:obj.id};
    console.log(this.selectedSection);
  }

}
