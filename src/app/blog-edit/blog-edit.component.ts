import { Component, OnInit ,ViewContainerRef} from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
  providers:[Location]
})
export class BlogEditComponent implements OnInit {

  
  constructor(private _http:BlogHttpService, private _route:ActivatedRoute, private router:Router,public toastr: ToastrManager, vcr: ViewContainerRef) { 
   
  }
  
  
 
 
  public possibleCategories=["Comedy" , "Drama" , "Action" , "Technology"]

  ngOnInit(): void {
   let myBlogId= this._route.snapshot.paramMap.get('blogId');
   console.log(myBlogId);

   this._http.getSingleBlogInfo(myBlogId).subscribe(
    data=>{
      console.log(data);
      this.currentBlog=data['data'];
      console.log("current data is");
      console.log(this.currentBlog);
    },
    error=>{
      console.log('Error occured');
      console.log(error.errorMessage);
    }
  )
  
}
public currentBlog:any=[];
public editBlog(): any{
  this._http.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(
    data=>{
      console.log(data)
      this.toastr.successToastr('Blog Edited Successfully!', 'Success!');
      setTimeout(() => {
        this.router.navigate(['/blog',this.currentBlog.blogId]);
       }, 1000);
      },
       error=>{
        console.log("Some error occured")
        console.log(error.errorMessage)
        this.toastr.errorToastr('Something Went Wrong', 'Error');
      }
  )
}

  }


