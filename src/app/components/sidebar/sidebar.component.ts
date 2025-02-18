import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";

@Component({
  selector: 'app-sidebar',
  imports: [NewsletterComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
