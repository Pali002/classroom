import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "students", component: StudentsComponent},
  {path: "github", component: GithubComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
