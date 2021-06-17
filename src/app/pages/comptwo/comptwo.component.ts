import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.scss']
})
export class ComptwoComponent {
  data = 'subject';
  constructor(
    private dataService: DataService
  ){
    this.dataService.data.subscribe(message=>this.data = message)
  }
  onClick(){
    this.dataService.newMessage("Message from Component Two")
  }
}
