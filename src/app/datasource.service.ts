import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  private content = new BehaviorSubject<string>('default value');

  public share = this.content.asObservable();

  constructor() { }

  updateData(text){
    this.content.next(text);
  }

}
