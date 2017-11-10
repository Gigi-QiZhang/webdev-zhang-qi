import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.cilent';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  // @ViewChild('f') loginForm: NgForm;
  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  widgets: Widget[];
  widget: Widget= {
    wgid: '',
    widgetType: '',
    pid: '',
  };
  // name: String;
  // widgetType: String;
  // size: number;
  // text: String;
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.uid = params['userId'];
          this.wid = params['wid'];
          this.pid = params['pid'];
          this.wgid = params['wgid'];
          this.widgetService.findWidgetById(this.wgid)
            .subscribe(
              (widget: Widget) => {
                this.widget = widget;
              }
            );
        }
      );
  }

}
