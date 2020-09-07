import { Component, OnInit } from '@angular/core';
import { DatasourceService } from '../datasource.service';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.scss']
})
export class Parent3Component implements OnInit {

  // text = '';
  text: string;

  constructor(private data: DatasourceService) { }

  ngOnInit(): void {
  }

  newMessage(){
    this.data.updateData('hello');
  }

}
