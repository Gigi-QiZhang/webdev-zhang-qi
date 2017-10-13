/**
 * Created by Qi on 10/07/17.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';
import { UserService } from './services/user.service.client';
import { User } from './model/user.model.client';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
// import { WebsiteListComponent } from './components/website/website-list/website-list.component';
// import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
// import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
// import { PageListComponent } from './components/page/page-list/page-list.component';
// import { PageNewComponent } from './components/page/page-new/page-new.component';
// import { PageEditComponent } from './components/page/page-edit/page-edit.component';
// import { WidgetListComponent } from './components/widget/widget-edit/widget-list/widget-list.component';
// import { WidgetChooserComponent } from './components/widget/widget-edit/widget-chooser/widget-chooser.component';
// import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
// import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
// import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
// import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';


@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    // WebsiteListComponent,
    // WebsiteNewComponent,
    // WebsiteEditComponent,
    // PageListComponent,
    // PageNewComponent,
    // PageEditComponent,
    // WidgetListComponent,
    // WidgetChooserComponent,
    // WidgetEditComponent,
    // WidgetHeaderComponent,
    // WidgetImageComponent,
    // WidgetYoutubeComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [UserService], // , WebsiteService, PageService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
