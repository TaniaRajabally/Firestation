/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {PositionService} from "src/app/position.service";
import {AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{google} from 'google-maps';
//import { } from '@types/googlemaps';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private PositionMemService: PositionService) {}
  locationList: AngularFireList<any>;
  model: any = {};

@ViewChild('gmap') gmapElement: any;
map: google.maps.Map;

latitude: number;
longitude: number;

iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

markerTypes = [
  {
    text: "Parking", value: "parking_lot_maps.png"
  }
   ,
   {
     text: "Library", value: "library_maps.png"
   },
   {
     text: "Information", value: "info-i_maps.png"
  
 }
];

selectedMarkerType: string = "parking_lot_maps.png";

isHidden = false;

ngOnInit() {
  this.PositionMemService.getLocation().subscribe(res => {
    //console.log(res)
  });
 

}

ngAfterContentInit() {
  let mapProp = {
    center: new google.maps.LatLng(18.5793, 73.8143),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

}

setMapType(mapTypeId: string) {
  this.map.setMapTypeId(mapTypeId)
}

setCenter() {

  this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

  let location = new google.maps.LatLng(this.latitude, this.longitude);
  console.log("inside survey");
  console.log(this.latitude);
 /* this.locationList.push({ 
    latitude : this.latitude,
    longitude : this.longitude
  });*/
  let marker = new google.maps.Marker({
    position: location,
    map: this.map,
    title: 'Got you!'
  });


  marker.addListener('click', this.simpleMarkerHandler);

  marker.addListener('click', () => {
    this.markerHandler(marker);
  });
  console.log('Function called');
  console.log(JSON.stringify((this.model)));
  alert('Your details are successfully saved!');
 
  this.model.latitude = this.latitude;
  this.model.longitude = this.longitude;
  this.PositionMemService.insertmem(this.model);
  this.PositionMemService.List.reset();
  this.PositionMemService.List.setValue({
    $key: null,
    latitude: null,
    
    longitude:null,
    
    
  });
}

simpleMarkerHandler() {
  alert('Simple Component\'s function...');
}

markerHandler(marker: google.maps.Marker) {
  alert('Marker\'s Title: ' + marker.getTitle());
}

showCustomMarker() {
  

  this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

  let location = new google.maps.LatLng(this.latitude, this.longitude);

  console.log(`selected marker: ${this.selectedMarkerType}`);

  let marker = new google.maps.Marker({
    position: location,
    map: this.map,
    icon: this.iconBase + this.selectedMarkerType,
    title: 'Got you!'
  });
 
}

toggleMap() {
  this.isHidden = !this.isHidden;

  this.gmapElement.nativeElement.hidden = this.isHidden;
}
}
