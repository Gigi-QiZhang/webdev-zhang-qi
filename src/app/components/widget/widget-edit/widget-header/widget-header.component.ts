import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  name: String;
  widgetType: String;
  size: number;
  text: String;
  constructor() { }

  ngOnInit() {
  }

}
