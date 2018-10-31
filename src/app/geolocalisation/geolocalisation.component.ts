import { Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-geolocalisation',
  templateUrl: './geolocalisation.component.html',
  styleUrls: ['./geolocalisation.component.css']
})

export class GeolocalisationComponent implements OnInit {

  distance = 60;
  points: Array<{ x: number; y: number; }> = [];

  constructor (private modalService: NgbModal){}

  ngOnInit() {
    // Generates random points
    const nbPoints = 20;
    for (let i = 0; i < nbPoints; ++i) {
      this.points.push({
        x : this.getRandomInRange(0.653, 0.711, 4),
        y: this.getRandomInRange(47.376, 47.401, 4)
      });
    }
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }
 
  openLg(content){
    console.log('hey');
    this.modalService.open(content,{size:'lg'});
  }

}

// function to get currentPosition //

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(displayLocationInfo);
}

function displayLocationInfo(position) {
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;

  console.log(`longitude: ${ lng } | latitude: ${ lat }`);
}




