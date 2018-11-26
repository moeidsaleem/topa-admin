import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs:AngularFirestore) { }



  /* OLX CLASSIFIED :) */

  signUp(user){
    return this.afs.collection('admin').add(user);
  }



  /* USERS */

//CREATE
createUser(uid,data){
  return this.afs.doc<any>('users/'+uid).set(data);
}
// READ
getUser(id){
  return this.afs.doc('users/'+id).valueChanges();
}

getUsers(){
  return this.afs.collection('users').snapshotChanges();
}

//DELETE
deleteUser(id){
  return this.afs.doc('users/'+id).delete();
}
//UPDATE
updateUser(id,data){
  return this.afs.doc('users/'+id).update(data);
}




/* SECTION */

// CREATE
createSection(data){
  return this.afs.collection('sections').add(data);
}
// READ
getSection(id){
  return this.afs.doc('sections/'+id).valueChanges();
}
//READ ALL
getSections(){
  return this.afs.collection('sections').snapshotChanges();
}
//DELETE
deleteSection(id){
  return this.afs.doc('sections/'+id).delete();
}
//UPDATE
updateSection(id,data){
  return this.afs.doc('sections/'+id).update(data);
}



/* CATEGORY */

// CREATE
createCategory(data){
  return this.afs.collection('categories').add(data);
}
// READ
getCategory(id){
  return this.afs.doc('categories/'+id).valueChanges();
}
//READ ALL
getCategories(){
  return this.afs.collection('categories').snapshotChanges();
}
//DELETE
deleteCategory(id){
  return this.afs.doc('categories/'+id).delete();
}
//UPDATE
updateCategory(id,data){
  return this.afs.doc('categories/'+id).update(data);
}


/*  ADS */

//CREATE
createAd(data){
  return this.afs.collection('ads').add(data);
}
// READ
getAd(id){
  return this.afs.doc('ads/'+id).valueChanges();
}
// GET
getAds(){
  return this.afs.collection('ads').snapshotChanges();
}
//DELETE
deleteAd(id){
  return this.afs.doc('ads/'+id).delete();
}
//UPDATE
updateAd(id,data){
  return this.afs.doc('ads/'+id).update(data);
}




/* COUPONS */

//CREATE
createCoupon(data){
  return this.afs.collection('coupons').add(data);
}
// READ
getCoupon(id){
  return this.afs.doc('coupons/'+id).valueChanges();
}
// GET
getCoupons(){
  return this.afs.collection('coupons').snapshotChanges();
}
//DELETE
deleteCoupons(id){
  return this.afs.doc('coupons/'+id).delete();
}
//UPDATE
updateCoupon(id,data){
  return this.afs.doc('coupons/'+id).update(data);
}
}
