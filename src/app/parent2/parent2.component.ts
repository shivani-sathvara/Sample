import { Component, OnInit } from '@angular/core';
import { DatasourceService } from '../datasource.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit {

  // text = '';
  text: string;

  constructor(private data: DatasourceService) { }

  ngOnInit(): void {
    // this.data.share.subscribe(x => this.text = x);
    this.data.share.subscribe(text => this.text = text);
  }


}
