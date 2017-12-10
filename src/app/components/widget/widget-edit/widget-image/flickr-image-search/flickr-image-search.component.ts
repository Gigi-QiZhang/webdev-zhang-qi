import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../../../../../services/flickr.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from '../../../../../services/widget.service.client';
// import { Widget } from '../../../../../models/widget.model.client';
import { Widget } from '../../../../../models/widget.model.cilent';
import { SharedService } from '../../../../../services/shared.service.client';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  photos: [any];
  error: string;
  searchText: string;
  // photo: any;

  constructor(private flickrService: FlickrService,
              private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

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

    const widget = {
      websiteId : this.websiteId,
      pageId : this.pageId,
      url: url
    };

    this.widgetService
      .updateWidget(this.widgetId, widget)
      .subscribe(
        (data: any) => {
          if (data) { this.router.navigate(['user' + 'website' + this.websiteId + 'page' + this.pageId + 'widget' + this.widgetId] );
          } else { this.error = 'failed!'; }
        }
      );

  }


  ngOnInit() {
    this.userId = this.sharedService.user['_id'];
    this.activatedRoute.params
      .subscribe((params: any) => {
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        }
      );
  }

}
