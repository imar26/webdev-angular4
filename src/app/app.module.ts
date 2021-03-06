import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { HomeComponent } from './components/home/home.component';
// import { TestComponent } from './components/test/test.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
// import {TestService} from './services/test.service.client';
// import { TodoComponent } from './todo/todo.component';
// import { TodoListComponent } from './todo-list/todo-list.component';
// import { TodoEditComponent } from './todo-list/todo-edit.component';
// import {TodoService} from './services/todo.service.client';
// import {WebsiteService} from './services/website.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetNewComponent } from './components/widget/widget-new/widget-new.component';
import { WidgetHeaderNewComponent } from './components/widget/widget-new/widget-header-new/widget-header-new.component';
import { WidgetImageNewComponent } from './components/widget/widget-new/widget-image-new/widget-image-new.component';
import { WidgetYoutubeNewComponent } from './components/widget/widget-new/widget-youtube-new/widget-youtube-new.component';
import { WidgetHtmlNewComponent } from './components/widget/widget-new/widget-html-new/widget-html-new.component';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';

// Services
import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';

// Directives
import { SortableDirective } from './directives/sortable.directive';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    // HomeComponent,
    // TestComponent,
    // TodoComponent,
    // TodoListComponent,
    // TodoEditComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetNewComponent,
    WidgetHeaderNewComponent,
    WidgetImageNewComponent,
    WidgetYoutubeNewComponent,
    WidgetHtmlNewComponent,
    WidgetHtmlComponent,
    SortableDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [UserService, WebsiteService, PageService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
