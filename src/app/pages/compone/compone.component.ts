import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-compone',
  templateUrl: './compone.component.html',
  styleUrls: ['./compone.component.scss']
})
export class ComponeComponent{
  data = 'subject';
  constructor(
    private dataService: DataService
  ){
    this.dataService.data.subscribe(message=>this.data = message)
  }
  onClick(){
    this.dataService.newMessage("Message from Component One")
  }
}
