import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AboutComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
