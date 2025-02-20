import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  @Input()
  postCover:string = "";
  @Input()
  postTitle:string = "";
  @Input()
  postText:string = "";
  @Input()
  postUser:string = "";
  @Input()
  postDate:string = "";
  @Input()
  postDay:string = "";
  @Input()
  postComments:string = "";
  @Input()
  postCategory:string = "";
  @Input()
  id:string= "0";

  ngOnInit(): void {
  }

}
