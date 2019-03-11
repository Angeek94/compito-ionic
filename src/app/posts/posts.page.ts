import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
public posts:Post[]
  constructor(public postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().then(response => {
       this.posts = response;
    })

  }
}