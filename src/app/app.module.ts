import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import {AuthService} from './shared/auth/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ChannelListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,JsonpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }