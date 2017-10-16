import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
// import { Widget } from '../../../models/widget.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
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
