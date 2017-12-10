import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';
import { Widget } from '../../../../models/widget.model.cilent';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  flag = false;
  error: string;
  alert: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  widget = {};
  widgetType: string;
  // widget: Widget = {
  //   wgid: '',
  //   widgetType: '',
  //   pid: ''
  // };
  widgets: Widget[];
  name: String;
  size: Number;
  text: String;
  width: String;
  url: String;
  formatted?: Boolean;
  rows?: number;
  placeholder?: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  updateWidget() {
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe(
        (data: any) => this.router.navigate(['user', 'website', this.websiteId, 'page', this.pageId, 'widget']),
        (error: any) => console.log(error)
      );
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (data: any) => this.router.navigate(['user', 'website', this.websiteId, 'page', this.pageId, 'widget']),
        (error: any) => console.log(error)
      );
  }

  ngOnInit() {
    this.error = 'Enter the name of the widget';
    this.alert = 'Enter the widget name';

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
          this.widgetService.findWidgetById(this.widgetId)
            .subscribe(
              (widget) => this.widget = widget,
              (error: any) => console.log(error)
            );
        });
  }

}
