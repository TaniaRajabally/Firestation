import { Component, OnInit } from '@angular/core';
import{RegserviceService} from '../services/regservice.service'

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.css']
})
export class VolComponent implements OnInit {

  openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }

   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


    DataArray = [];

    



    constructor(private RegisterService: RegserviceService) {
      
    }

    ngOnInit() {
        this.RegisterService.getmem().subscribe(
            list => {
                this.DataArray = list.map(item => {
                    return {
                        $key: item.key,
                        ...item.payload.val()
                    };
                });
            });
    }
    
    
   
}
