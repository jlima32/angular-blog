import { Component } from '@angular/core';
import { NewsletterComponent } from "../newsletter/newsletter.component";
import { CategoryMenuComponent } from "../category-menu/category-menu.component";
import { CommentsMenuComponent } from "../comments-menu/comments-menu.component";
import { BigCardComponent } from "../big-card/big-card.component";

@Component({
  selector: 'app-sidebar',
  imports: [NewsletterComponent, CategoryMenuComponent, CommentsMenuComponent, BigCardComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', './sidebar.responsive.component.css']
})
export class SidebarComponent {

}
