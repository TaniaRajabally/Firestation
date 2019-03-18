import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private firebase: AngularFireDatabase) { }
  locationList: AngularFireList<any>;
  List = new FormGroup({
    $key: new FormControl(null),
    latitude: new FormControl('', Validators.required),
    longitude: new FormControl('', Validators.required),

    
  });

  getLocation() {
    this.locationList = this.firebase.list('/location');
    return this.locationList.snapshotChanges();
  }

  insertmem(List) {
    console.log("inside survey service");
    console.log(List.latitude);

   // JSON.parse( JSON.stringify(this.locationList ) )
    this.locationList.push({
      longitude: List.longitude ,
      latitude: List.latitude,
    

    });
    // this.formList.push("reached data");
  }
}
