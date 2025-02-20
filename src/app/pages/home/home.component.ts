import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; //
import { TitleComponent } from "../../components/title/title.component";
import { PostComponent } from "../../components/post/post.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { data } from "../../data/data"

@Component({
  selector: 'app-home',
  imports: [CommonModule,TitleComponent, PostComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsive.component.css']
})
export class HomeComponent implements OnInit {

  public posts: any[] = [];

  ngOnInit(): void {
    this.posts = data;
    console.log(this.posts)
  }

}
