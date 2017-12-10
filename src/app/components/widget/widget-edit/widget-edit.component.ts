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
  widgetId: string;
  widget = {widgetType: ''};
  header = 'Header'; youtube = 'YouTube'; text = 'Text'; html = 'HTML'; image = 'Image';

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params) => {
          this.widgetId = params['wgid'];
        }
      );

    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => this.widget.widgetType = data.widgetType
      );
  }
}
