import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { WidgetService } from '../../../../services/widget.service.client';
import { Widget } from '../../../../models/widget.model.cilent';
import { NgForm } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { SharedService } from '../../../../services/shared.service.client';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  flag = false;
  widget = {};
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  baseUrl: string;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

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



  ngOnInit() {
    // this.error = 'Enter the name of the widget';
    // this.alert = 'Enter the widget name';
    this.baseUrl = environment.baseUrl;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = this.sharedService.user['_id'];
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
}
