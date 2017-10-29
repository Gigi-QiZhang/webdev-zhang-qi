import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Widget } from '../../../models/widget.model.cilent';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  @ViewChild('f') widgetForm: NgForm;

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
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer) { }


  getYoutubeEmbedUrl(link: String) {
    let embedUrl = 'https://www.youtube.com/embed/';
    const parsedLink = link.split('/');
    embedUrl += parsedLink[parsedLink.length - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }


  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.uid = params['uid'];
        this.wid = params['wid'];
        this.pid = params['pid'];
        this.wgid = params['wgid'];
        this.widgetService.findAllWidgetsForPageId(this.pid)
          .subscribe((widgets: Widget[]) => {
          this.widgets = widgets;
          });
    });
  }
}
