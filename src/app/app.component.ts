import { DataService } from './services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = 'subject';
  constructor(
    private dataService: DataService
  ){
    this.dataService.data.subscribe(message=>this.data = message)
  }
  onClick(){
    this.dataService.newMessage("Message from AppComponent")
  }
}
