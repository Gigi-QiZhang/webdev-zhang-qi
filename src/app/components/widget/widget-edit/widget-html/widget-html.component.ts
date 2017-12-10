import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { WidgetService} from '../../../../services/widget.service.client';
// import { Widget } from '../../../../models/widget.model.client';
import { Widget } from '../../../../models/widget.model.cilent';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']})

  export class WidgetHtmlComponent implements OnInit {

    widgetNew = {name: '', text: ''};
    error: string;
    alert: string;
    flag = false;
    widget = {};
    userId: string;
    websiteId: string;
    pageId: string;
    widgetId: string;
    baseUrl: string;

    constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

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
                (data: any) => this.widget = data,
                (error: any) => console.log(error)
              );
          });
    }

  updateWidget() {
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe(
        (data: any) => this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']),
        (error: any) => console.log(error)
      );
  }


  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (data: any) => this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget']),
        (error: any) => console.log(error)
      );
  }
}
