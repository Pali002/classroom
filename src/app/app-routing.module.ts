// * File: app-routing.module.ts
// * Author: Zentai Pál
// * Copyright: 2023, Zentai Pál
// * Group: Szoft-II-N
// * Date: 2023-02-07
// * Github: https://github.com/Pali002
// * Licenc: GNU GPL

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
