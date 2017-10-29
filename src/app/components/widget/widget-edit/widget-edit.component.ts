import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
// import { Widget } from '../../../models/widget.model.client';
import { NgForm } from '@angular/forms';

// user/:uid/website/:wid/page/:pid/widget/:wgid WidgetEditComponent
@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // properties
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
