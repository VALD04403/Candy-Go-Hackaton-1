import { Component, OnInit } from '@angular/core';
import { BonbonService } from '../common/bonbon.service';


@Component({
  selector: 'app-candy-box',
  templateUrl: './candy-box.component.html',
  styleUrls: ['./candy-box.component.css']
})
export class CandyBoxComponent implements OnInit {
bonbons: any;
page: 1;

  constructor(private service: BonbonService) { }

  ngOnInit() {
    this.service.readAll().subscribe(res => {
    this.bonbons = res.products;
    });
  }

}
