import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(public apiService:ApiService){
    apiService.getfirebase().then((product)=>{
      console.log(product)
    })
  }

}


