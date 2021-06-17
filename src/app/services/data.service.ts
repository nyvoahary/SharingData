import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data$ = new BehaviorSubject<string>('Default message from dataServices')
  data = this.data$
  constructor() { }
  newMessage(data:string){
    this.data$.next(data)
  }
}
