import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { PostComponent } from "../../components/post/post.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  imports: [TitleComponent, PostComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent {

}
