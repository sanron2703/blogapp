import { Component, OnInit ,ViewContainerRef} from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {


  constructor(private blogHttpService:BlogHttpService, private _route:ActivatedRoute, private router:Router,public toastr: ToastrManager, vcr: ViewContainerRef) { 
   
  }
  

  public blogTitle!: string;
  public blogBodyHtml!: string;
  public blogDescription!: string;
  public blogcategory!: string;
  public possibleCategories=["Comedy" , "Drama" , "Action" , "Technology"]

  ngOnInit(): void {
  }

 public createBlog():any{
   let blogData={
     title: this.blogTitle,
     description: this.blogDescription,
     blogBody: this.blogBodyHtml,
     category: this.blogcategory
   }

   console.log(blogData);

   this.blogHttpService.createBlog(blogData).subscribe(
     data=>{
       console.log("Blog Created")
       console.log(data)
       this.toastr.successToastr('Blog Posted Successfully!', 'Success!');
       setTimeout(() => {
        this.router.navigate(['/blog',data.data.blogId]);
       }, 2000);
     },
     error=>{
       console.log("Some error occured")
       console.log(error.errorMessage)
       this.toastr.errorToastr('Something Went Wrong', 'Error');
     }
     
   )
 }
}
