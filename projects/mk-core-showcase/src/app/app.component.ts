import { Component, OnInit } from '@angular/core';
import { MkCoreSampleService } from 'mkCore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private mkCoreSampleService: MkCoreSampleService) {}

  ngOnInit() {
    console.log(this.mkCoreSampleService.getBestFramework());
  }
}
