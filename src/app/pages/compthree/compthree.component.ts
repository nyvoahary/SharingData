import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-compthree',
  templateUrl: './compthree.component.html',
  styleUrls: ['./compthree.component.scss']
})
export class CompthreeComponent{
  data = 'subject';
  constructor(
    private dataService: DataService
  ){
    this.dataService.data.subscribe(message=>this.data = message)
  }
  onClick(){
    this.dataService.newMessage("Message from Component three")
  }
}
