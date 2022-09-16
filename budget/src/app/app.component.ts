import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(response => {
      this.posts = Object.values(response)[1];
      console.log(this.posts);
    });
  }
}
