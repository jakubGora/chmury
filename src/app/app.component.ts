import { Component } from '@angular/core';
import {CloudService} from "./cloud.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clouds:any = [];

  constructor(private cloudService: CloudService) {}

  ngOnInit() {
    this.cloudService.getClouds().subscribe((data: any) => {
      this.clouds = data;
    });
  }
}
