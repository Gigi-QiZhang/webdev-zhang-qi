import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // properties
  _id: String;
  name: String;
  developerId: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  constructor(private websiteService: WebsiteService,
              private router: Router) { }
  ngOnInit() {
  }

}
