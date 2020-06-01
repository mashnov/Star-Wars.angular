import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../components/root/app.component';

import { PreloaderComponent } from '../components/shared/preloader/preloader.component';
import { InputComponent } from '../components/shared/input/input.component';

import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SidebarSearchComponent } from '../components/sidebar-search/sidebar-search.component';
import { SidebarListComponent } from '../components/sidebar-list/sidebar-list.component';
import { SidebarListItemComponent } from '../components/sidebar-list-item/sidebar-list-item.component';
import { ContentComponent } from '../components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    InputComponent,
    SidebarComponent,
    SidebarSearchComponent,
    SidebarListComponent,
    SidebarListItemComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
