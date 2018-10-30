import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
@Input() name;

  constructor(private modalService: NgbModal) { }

  

  ngOnInit() {
  }
   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result
  }

}
