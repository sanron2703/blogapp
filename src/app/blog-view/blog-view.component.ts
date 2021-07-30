import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

import { BlogService } from '../blog.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit , OnDestroy{
 
  public currentBlog;
  


  constructor(private _route : ActivatedRoute, private router:Router , private blogservice : BlogService ,private _http: BlogHttpService,public toastr: ToastrManager, private location:Location) {
    console.log("blog-view constructor is called")

  }
  
  ngOnInit() {
    console.log("blog-view oninit is called");
    let myBlogId= this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    // this.currentBlog=this.blogHttpService.getSingleBlogInfo(myBlogId);
    // console.log(this.currentBlog);

    this._http.getSingleBlogInfo(myBlogId).subscribe(
      data=>{
        console.log('Logging Data');
        console.log(data);
        this.currentBlog=data['data'];
      },
      error=>{
        console.log('Error occured');
        console.log(error.errorMessage);
      }
    )
    
  }
  public deleteThisBlog(): any{
    this._http.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data)
        this.toastr.successToastr('Blog Deleted Successfully!', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/home']);
         }, 2000);
        },
         error=>{
          console.log("Some error occured")
          console.log(error.errorMessage)
          this.toastr.errorToastr('Something Went Wrong', 'Error');
        }
    )
  }
  public goBackPage():any{
    this.location.back();
  }
  ngOnDestroy() {
    console.log("blog-view destroyed");
  }
}
  


