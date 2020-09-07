import { Component, OnInit } from '@angular/core';
import { DatasourceService } from '../datasource.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {

  // text = '';
  text: string;

  constructor(private data: DatasourceService) { }

  ngOnInit(): void {
    // this.data.share.subscribe(x => this.text = x);
    this.data.share.subscribe(text => this.text = text);
  }

}
