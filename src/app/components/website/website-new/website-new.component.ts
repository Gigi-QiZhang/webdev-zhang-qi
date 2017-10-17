import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  // @ViewChild('f') loginForm: NgForm;
  // properties
  uid: String;
  wid: String;
  name: String;
  description: String;

  constructor(private websiteService: WebsiteService,
              private router: Router) { }

  ngOnInit() {
  }

}
