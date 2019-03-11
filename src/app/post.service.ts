import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public api:string='https://fake-tweets-api.herokuapp.com/posts/'
  constructor(public httpClient:HttpClient) { }
  getPosts(){
    return this.httpClient.get<Post[]>(this.api).toPromise();

  }
  public postById(id:number): Promise<Post>{
    return this.httpClient.get<Post>(this.api+"/"+id).toPromise();

  }
  public addComment(comment:Comment,id :number) : Promise<Comment>{
    return this.httpClient.post<Comment>(this.api+"/"+id+"/"+"posts", comment).toPromise();
  }
  public addPost(post:Post) : Promise<Post>{
    return this.httpClient.post<Post>(this.api,post).toPromise();
  }
  // getAuthor(): String {
  //   return this.author;
  // }
  // setAuthor(author: String) {
  //   this.author = author;
  // }
}
