import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // properties
  _id: String;
  name: String;
  developerId: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';
  constructor(private pageService: PageService,
              private router: Router) { }
  ngOnInit() {
  }

}
