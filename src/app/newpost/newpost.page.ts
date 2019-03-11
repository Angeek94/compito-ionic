import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post,Comment } from '../post';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})
export class NewpostPage implements OnInit {

  constructor(public postService:PostService) { }

public post : Post = {

  author: "",
  image:"",
  message:"",
  likes:[],
 comments:Comment[""]

};
  ngOnInit() {
    
  }
  newPost(){
    this.postService.addPost(this.post).then(response=>{
      console.log(response)
    })
  }

}
