///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // properties
  _id: String;
  name: String;
  developerId: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  constructor(private widgetService: WidgetService,
              private router: Router) { }

  ngOnInit() {
  }

}
