import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

  public allblogs:any=[];
 

  constructor(public blogHttpService:BlogHttpService) { 
    console.log("Home component is called");
  }

  ngOnInit(){
    console.log("Home component oninit is called");
    this.allblogs=this.blogHttpService.getAllBlogs().subscribe(
      data=>{
        console.log('Logging Data');
        console.log(data);
        this.allblogs=data['data'];
      },
      error=>{
        console.log('Error occured');
        console.log(error.errorMessage);
      }
    )
    }
   


  ngOnDestroy(){
    console.log("destroyed");
  }

  
}
