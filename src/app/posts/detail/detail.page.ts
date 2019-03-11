import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from 'src/app/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
public post: Post;
  constructor(public postService:PostService,public activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.postService.postById(this.activateRoute.snapshot.params.id).then(response => {
      this.post = response;
   })
    
  }

}
