import { Component, OnInit } from '@angular/core';
import { BonbonService } from '../common/bonbon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-candy-box',
  templateUrl: './candy-box.component.html',
  styleUrls: ['./candy-box.component.css']
})
export class CandyBoxComponent implements OnInit {
  bonbons: any;
  page: 1;

  constructor(public service: BonbonService, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.readAll().subscribe(res => {
      this.bonbons = res.products;
    });
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' }).result
      .then(res => {
        this.service.totalEnergy(-res);
      });
  }
}
