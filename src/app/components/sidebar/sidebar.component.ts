import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { CategoryMenuComponent } from "../category-menu/category-menu.component";
import { CommentsMenuComponent } from "../comments-menu/comments-menu.component";

@Component({
  selector: 'app-sidebar',
  imports: [NewsletterComponent, CategoryMenuComponent, CommentsMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
