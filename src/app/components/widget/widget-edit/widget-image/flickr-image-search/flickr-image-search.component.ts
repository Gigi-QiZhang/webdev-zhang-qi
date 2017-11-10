import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../../../../services/flickr.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from '../../../../../services/widget.service.client';
// import { Widget } from '../../../../../models/widget.model.client';
import { Widget } from '../../../../../models/widget.model.cilent';


@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {
  uid: String;
  wid: String;
  pid: String;
  wgid: String;
  photos: {};
  searchText: String;

  widget: Widget= {
    wgid: '',
    widgetType: '',
    pid: '',
  };

  constructor(private flickrService: FlickrService,
              private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  searchPhotos() {
    this.flickrService
      .searchPhotos(this.searchText)
      .subscribe((data: any) => {
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          this.photos = val.photos;
        }
      );
  }
  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    this.widget.url = url;
    const widget = {
      websiteId: this.wid,
      pageId: this.pid,
      url: url
    };
    // this.widgetService
    //   .updateWidget(this.wgid, this.widget)
    //   .subscribe(
    //     (data: any) => {
    //       this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', this.wgid]);
    //     }
    //   );
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
      this.photos = [''];
      this.widgetService.findWidgetById(this.wgid)
        .subscribe(
          (widget: Widget) => {
            this.widget = widget;
          }
        );
    });
  }

}
