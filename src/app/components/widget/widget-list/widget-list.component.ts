import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Widget } from '../../../models/widget.model.cilent';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets = [{}];
  widget = {};
  websiteId: string;
  pageId: string;
  youtubeUrl: SafeResourceUrl;
  baseUrl: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private sanitizer: DomSanitizer) {
  }

  updateVideoUrl(url: string) {
    // const aurl = 'https://www.youtube.com/embed/qdA32j7_U6U';
    return this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  updateImageUrl(string) {
    let newurl = '';
    if (string.substring(1, 4) === 'ass') {
      newurl = this.baseUrl + string;
    } else {
      newurl = string;
    }
    return newurl;
  }

  reorderWidgets(indexes) {
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe((widgets) => {
      // console.log(widgets);
     });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );

    this.widgetService.findAllWidgetsForPage(this.pageId)
      .subscribe(
        (data: any) => {
          this.widgets = data;
          console.log(this.widgets);
        }
      );
  }

}


