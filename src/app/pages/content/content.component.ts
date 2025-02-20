import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-content',
  imports: [TitleComponent, SidebarComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent {

}
