import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { HomeComponent } from './components/home/home.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import { AuthenticationService } from './services/authentication.service.client';


const APP_ROUTES: Routes = [
  { path : '', component : HomeComponent},

  { path : 'login' , component: LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'profile' , component: ProfileComponent, canActivate: [AuthenticationService]},

  { path : 'user/website' , component: WebsiteListComponent, canActivate: [AuthenticationService]},
  { path : 'user/website/new' , component: WebsiteNewComponent, canActivate: [AuthenticationService]},
  { path : 'user/website/:wid' , component: WebsiteEditComponent, canActivate: [AuthenticationService]},

  { path : 'user/website/:wid/page' , component: PageListComponent, canActivate: [AuthenticationService]},
  { path : 'user/website/:wid/page/new' , component: PageNewComponent, canActivate: [AuthenticationService]},
  { path : 'user/website/:wid/page/:pid' , component: PageEditComponent, canActivate: [AuthenticationService]},

  { path : 'user/website/:wid/page/:pid/widget' , component: WidgetListComponent, canActivate: [AuthenticationService]},
  { path : 'user/website/:wid/page/:pid/widget/new' , component: WidgetChooserComponent, canActivate: [AuthenticationService]},
  { path : 'user/website/:wid/page/:pid/widget/:wgid' , component: WidgetEditComponent, canActivate: [AuthenticationService]},
  { path : 'user/website/:wid/page/:pid/widget/:wgid/flickr' , component: FlickrImageSearchComponent, canActivate: [AuthenticationService]}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
