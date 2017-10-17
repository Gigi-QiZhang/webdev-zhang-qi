import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { PageService } from '../../../services/page.service.client';
import { Widget } from '../../../models/widget.model.cilent';


@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;

  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  name: String;
  widget: Widget;
  widgets: Widget[];
  // widgetType: String;
  // size: number;
  // text: String;

  constructor(private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
        this.wgid = params['wgid'];
      }
    );
    this.widget = this.widgetService.findWidgetByPageId(this.pid);
    this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
  }
}
