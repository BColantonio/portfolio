import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-blurb',
  templateUrl: './content-blurb.component.html',
  styleUrls: ['./content-blurb.component.css']
})
export class ContentBlurbComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  
  addNewItem(value: string)  {
    this.newItemEvent.emit(value);
  }

}
