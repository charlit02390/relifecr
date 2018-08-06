import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { InstitutionComponent } from './institution/institution.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoryComponent } from './history/history.component';
import { CommentComponent } from './comment/comment.component';
import { MakeblogComponent } from './makeblog/makeblog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    InstitutionComponent,
    HomeComponent,
    NavbarComponent,
    HistoryComponent,
    CommentComponent,
    MakeblogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
