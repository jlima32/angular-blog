import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { BigCardComponent } from "../big-card/big-card.component";
import { SmallCardComponent } from "../small-card/small-card.component";
import { TitleComponent } from "../title/title.component";
import { PostComponent } from "../post/post.component";

@Component({
  selector: 'app-main',
  imports: [SidebarComponent, BigCardComponent, SmallCardComponent, TitleComponent, PostComponent],
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.css',
    './main.responsive.component.css'
  ]
})
export class MainComponent {

}
