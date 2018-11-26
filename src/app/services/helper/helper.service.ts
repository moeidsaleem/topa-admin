import { Injectable } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private toastr: ToastrService,private modalService: NgbModal,) { }







showSuccess(heading, message) {
  this.toastr.success(heading, message);
}

showWarning(heading, message) {
  this.toastr.warning(heading, message);
}

showDanger(heading, message) {
  this.toastr.error(heading, message);
}

showInfo(heading, message) {
  this.toastr.success(heading, message);
}







  /* MODAL */
  openModal(content) {
   return this.modalService.open(content, {backdrop:'static',keyboard:false});
  }
  closeModal(){
    return this.modalService.dismissAll();
  }






}
