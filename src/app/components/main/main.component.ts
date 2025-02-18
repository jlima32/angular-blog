import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { BigCardComponent } from "../big-card/big-card.component";
import { SmallCardComponent } from "../small-card/small-card.component";

@Component({
  selector: 'app-main',
  imports: [SidebarComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
