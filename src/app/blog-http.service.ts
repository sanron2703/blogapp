import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import{HttpClient, HttpErrorResponse} from '@angular/common/Http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allblogs;
  public currentBlog;
  public baseUrl ="https://blogapp.edwisor.com/api/v1/blogs";
  public authToken='MzU2NmE1NjFhOTE2ZmY2YzZkZjNiZjdlMmQ4YWIzOGZkM2UzYTIzMTc4OTM5ZGNkYTNiNzExNzFhOGI1MDA3ZDExM2FkNTBjMzZmYjkxZmQ3NTM3MGQ2ZTBiNWZmZjRmMzJlNThkNDUxY2U4NjRmMTYxZTgxYjAwM2QxNjJmYzJhMw==';

  constructor(private _http:HttpClient) { 
    console.log("blog-http service called")
  }
  private handleError(err:HttpErrorResponse){
    console.log("handle error http calls")
    console.log(err.message)
    return Observable.throw(err.message)
  }

  public getAllBlogs(): any {
    let myresponce= this._http.get(this.baseUrl+'/all?authToken=' + this.authToken);
   console.log (myresponce);
    return myresponce;
  
  }
  public getSingleBlogInfo(currentBlogId):any{
    let myresponce=this._http.get(this.baseUrl + '/view/' + currentBlogId + '?authToken=' + this.authToken)
    return myresponce
  }
  public createBlog(blogData):any{
    let myresponce=this._http.post(this.baseUrl+'/create'+'?authToken='+ this.authToken,blogData)
    return myresponce
  }
  public deleteBlog(blogId):any{
    let data={}
    let myresponce=this._http.post(this.baseUrl+'/'+blogId+'/delete'+'?authToken='+this.authToken,data)
    return myresponce
  }
  public editBlog(blogId,blogData):any{
    let myresponce=this._http.put(this.baseUrl+'/'+blogId+'/edit'+'?authToken='+this.authToken,blogData)
    return myresponce
  }



  
    
  }

