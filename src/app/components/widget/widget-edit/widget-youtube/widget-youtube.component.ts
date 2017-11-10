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
  @ViewChild('f') widgetForm: NgForm;

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
  name: String;
  text: String;
  size: Number;
  // src: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  update() {
    this.name = this.widgetForm.value.name;
    this.wgid = this.widgetForm.value.wgid;
    this.pid = this.widgetForm.value.pid;
    this.text = this.widgetForm.value.text;
    this.size = this.widgetForm.value.size;
    // this.src = this.widgetForm.value.src;

    const editedWidget: Widget = new Widget(this.name, this.widget.widgetType, this.widget.pid);

    this.widgetService.updateWidget(this.wgid, editedWidget)
      .subscribe(
        (widget: Widget) => {
          this.widget = widget;
          this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  }

  remove() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (widgets: Widget[]) => {
          this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
        }
      );
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
      this.widgetService.findWidgetById(this.wgid)
        .subscribe(
          (widget: Widget) => {
            this.widget = widget;
          }
        );
    });
  }

}
