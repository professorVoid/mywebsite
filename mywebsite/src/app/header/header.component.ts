import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';
import { slideInAnimation } from '../animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isHomeActive: boolean = true;
  isBlogActive: boolean = false;
  isProjectsActive: boolean = false;
  isContactActive: boolean = false;
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  setupUI() {
  }

  transitionPage(page: string) {
  }

  mouseOverCircle(page: string) {}

  mouseOffCircle(page: string) {}
}
