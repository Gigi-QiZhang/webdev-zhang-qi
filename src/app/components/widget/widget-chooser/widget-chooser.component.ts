// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { WidgetService } from '../../../services/widget.service.client';
// import { Widget } from '../../../models/widget.model.cilent';
// import { NgForm } from '@angular/forms';
//
// @Component({
//   selector: 'app-widget-chooser',
//   templateUrl: './widget-chooser.component.html',
//   styleUrls: ['./widget-chooser.component.css']
// })
// export class WidgetChooserComponent implements OnInit {
//   uid: String;
//   wid: String;
//   pid: String;
//   wgid: String;
//   widgets: Widget[];
//   widget: Widget= {
//     wgid: '',
//     widgetType: '',
//     pid: '',
//   };
//
//   constructor(private widgetService: WidgetService,
//               private activatedRoute: ActivatedRoute,
//               private router: Router) { }
//
//   createHeading() {
//     const newWidget: Widget = {
//       widgetType: 'HEADING',
//       pid: this.pid,
//     };
//     this.widgetService.createWidget(this.pid, newWidget)
//       .subscribe((widget: Widget) => {
//           this.wgid = widget.wgid;
//           this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.wgid]);
//         }
//       );
//   }
//
//   createImage() {
//     // const newWidget: Widget = new Widget ('', 'IMAGE', this.pid);
//     const newWidget: Widget = {
//       widgetType: 'IMAGE',
//       pid: this.pid,
//     };
//     this.widgetService.createWidget(this.pid, newWidget)
//       .subscribe(
//         (widget: Widget) => {
//           this.wgid = widget.wgid;
//           this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.wgid]);
//         }
//       );
//   }
//
//   createYoutube() {
//     // const newWidget: Widget = new Widget ('', 'YOUTUBE', this.pid);
//     const newWidget: Widget = {
//       widgetType: 'YOUTUBE',
//       pid: this.pid,
//     };
//     this.widgetService.createWidget(this.pid, newWidget)
//       .subscribe(
//         (widget: Widget) => {
//           this.wgid = widget.wgid;
//           this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.wgid]);
//         }
//       );
//   }
//
//   createHtml() {
//     const newWidget: Widget = {
//       widgetType: 'HTML',
//       pid: this.pid,
//     };
//
//     this.widgetService.createWidget(this.pid, newWidget)
//       .subscribe(
//         (widget: Widget) => {
//           this.wgid = widget.wgid;
//           this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.wgid]);
//         }
//       );
//   }
//
//   createText() {
//     const newWidget: Widget = {
//       widgetType: 'Text',
//       pid: this.pid,
//     };
//     this.widgetService.createWidget(this.pid, newWidget)
//       .subscribe(
//         (widget: Widget) => {
//           this.wgid = widget.wgid;
//           this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.wgid]);
//         }
//       );
//   }
//
//   ngOnInit() {
//     this.activatedRoute.params
//       .subscribe(
//         (params: any) => {
//           this.uid = params['uid'];
//           this.wid = params['wid'];
//           this.pid = params['pid'];
//           console.log(params);
//         }
//       );
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  websiteId: string;
  pageId: string;
  widgetId: string;
  widget = {};

  defaultWidgetValues = {
      'Header': {widgetType: 'Header', 'size' : 1},
      'Image': {widgetType: 'Image', width: '100%'},
      'YouTube': {widgetType: 'YouTube', width: '100%'},
      'HTML': {widgetType: 'HTML'},
      'Text': {widgetType: 'Text', placeholder: ''}
    };

  constructor(private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
  }

  createWidget(widgetType) {
    this.widget = this.defaultWidgetValues[widgetType];
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe(
        (data: any) => {
          this.widgetId = data._id;

          this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
        },
        (error: any) => console.log(error)
      );
  }

}
