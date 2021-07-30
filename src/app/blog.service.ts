import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allblogs = [
    {
      "blogId" : "1",
      "lastModified" : "2017-10-20T12:20:47.854Z",
      "created" : " 2017-10-20T12:20:47.854Z",
      "tages" : ["hgkgkg"],
      "author" : "Admin",
      "category" : "comedy",
      "isPublished" : true,
      "views" : 0,
      "bodyHtml" : " this is blog body",
      "discription" : " this is blog 1 description",
      "title" : "This is BLog 1"
    },
    {
      "blogId" : "2",
      "lastModified" : "2017-10-21T12:47:51.678Z",
      "created" : " 2017-10-21T21:47:51.878Z",
      "tages" : [],
      "author" : "Admin",
      "category" : "comedy",
      "isPublished" : true,
      "views" : 0,
      "bodyHtml" : " <h1>This is big text</h1> <p> small text</p>",
      "discription" : " this is blog 2 description",
      "title" : "This is BLog 2"
    },
    {
      "blogId" : "3",
      "lastModified" : "2017-11-14T14:15:54.407Z",
      "created" : " 2017-11-14T14:15:54.407Z",
      "tages" : [],
      "author" : "Admin",
      "category" : "comedy",
      "isPublished" : true,
      "views" : 0,
      "bodyHtml" : " this is blog 3 body",
      "discription" : " this is blog 3 description",
      "title" : "This is BLog 3"
    },
    
    
  ]
  public currentBlog;

 

  constructor() {
    console.log("service constructor is called");
   }

  public getAllBlogs(): any {
    return this.allblogs;
  }



  public getSingleBlogInfo(currentBlogId: string) : any{
    for(let blog of this.allblogs){
      if(blog.blogId==currentBlogId){
        this.currentBlog=blog;
         }  
    }
    console.log(this.currentBlog);
    return this.currentBlog;
 }
}
  

