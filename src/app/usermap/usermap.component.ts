/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import {PositionService} from "src/app/position.service";
import {AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { } from '@types/googlemaps';


@Component({
  selector: 'app-usermap',
  templateUrl: './usermap.component.html',
  styleUrls: ['./usermap.component.css']
})
export class UsermapComponent implements OnInit {

  constructor(private PositionMemService: PositionService) { }
  locationArray: any[] ;
 
  ngOnInit() {

    console.log("kya bhaiiiiiiiiiiiiiii");
    let mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.PositionMemService.getLocation().subscribe(res => {
      this.locationArray = res.map(item =>
        {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        for (let i of this.locationArray)
        { 
          
            console.log(i.latitude);
            let location = new google.maps.LatLng(i.latitude, i.longitude
            );
     
            // 
            
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
           
        }
    });

    
    /*
    
    */

  }
    
   
  
  ngAfterContentInit() {
    
   

    
   
    console.log("inside survey");
    console.log("User map values below");
    
    console.log(this.locationArray);
    console.log(JSON.stringify((this.locationArray)));
   
    
  console.log("Iteration")
     
  
  
     
  }
  @ViewChild('gmap') gmapElement: any;
  
  map: google.maps.Map;

  latitude: number;
  longitude: number;

  iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  
  simpleMarkerHandler() {
    alert('Simple Component\'s function...');
  }

  markerHandler(marker: google.maps.Marker) {
    alert('Marker\'s Title: ' + marker.getTitle());
  }

}
