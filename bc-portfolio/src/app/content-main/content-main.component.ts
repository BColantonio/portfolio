import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentMainComponent implements OnInit {

  @Input()
  public items = ['item1', 'item2', 'item3', 'item4', 'item1', 'item2', 'item3', 'item4'];

  constructor() { }

  ngOnInit(): void {
  }

  public addItem(newItem: string) {
    this.items.push(newItem);
  }

}
