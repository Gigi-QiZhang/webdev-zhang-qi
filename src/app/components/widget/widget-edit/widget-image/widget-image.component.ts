import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';
// import { Widget } from '../../../models/widget.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  name: String;
  widgetType: String;
  size: number;
  text: String;
  constructor(private widgetService: WidgetService,
              private router: Router) { }

  ngOnInit() {
  }

}
