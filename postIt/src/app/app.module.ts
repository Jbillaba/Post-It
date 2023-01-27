import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PostsComponent } from './posts/posts.component';
import { PostitComponent } from './postit/postit.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PostsComponent,
    PostitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingComponent},
      { path: 'posts', component: PostsComponent},
      { path: 'postit', component: PostitComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
