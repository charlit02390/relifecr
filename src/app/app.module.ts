import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';

import { CacheService, CacheStorageAbstract, CacheLocalStorage } from 'ng2-cache';
import { AppRoutingModule } from './app.routes.module';
import { MatTableModule} from '@angular/material/table';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { QuillModule, QuillConfigInterface, QUILL_CONFIG } from 'ngx-quill-wrapper';

import { AppComponent } from './app.component';
import { DataService } from './core';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { InstitutionComponent } from './institution/institution.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoryComponent } from './history/history.component';
import { CommentComponent } from './comment/comment.component';
import { MakeblogComponent } from './makeblog/makeblog.component';
import { AuthService } from './auth';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';

const DEFAULT_QUILL_CONFIG: QuillConfigInterface = {
};

const APP_PROVIDERS = [
    AuthService,
    DataService,
    CacheService,
    { provide: CacheStorageAbstract, useClass: CacheLocalStorage },
    { provide: QUILL_CONFIG, useValue: DEFAULT_QUILL_CONFIG }
];
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
    MakeblogComponent,
    ManageBlogsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MatTableModule,
    MatCheckboxModule,
    CovalentTextEditorModule,
    CollapseModule.forRoot(),
    QuillModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
