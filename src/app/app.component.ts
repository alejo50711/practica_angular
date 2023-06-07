import { Component } from '@angular/core';
import { Carousel, Dropdown, initTE } from 'tw-elements';
import {
  Collapse
} from "tw-elements";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaapp';
  ngOnInit() {
    initTE({ Carousel, Dropdown,Collapse });
  }
  

}
