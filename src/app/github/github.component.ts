// * File: github.component.ts
// * Author: Zentai Pál
// * Copyright: 2023, Zentai Pál
// * Group: Szoft-II-N
// * Date: 2023-02-07
// * Github: https://github.com/Pali002
// * Licenc: GNU GPL

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit{

  constructor () {}

  ngOnInit(): void { }
  github = 'https://github.com/Pali002';

}
