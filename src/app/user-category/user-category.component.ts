import { Component } from '@angular/core';
import { UserCategoryService } from '../user-category.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-category',
  templateUrl: './user-category.component.html',
  styleUrls: ['./user-category.component.css']
})
export class UserCategoryComponent {

  constructor(private userCategoryService:UserCategoryService,private router:Router, private toasterService: ToastrService){}

  userCategoryName:String=""

  addUserCategory(){
    console.log(this.userCategoryName);
    let userCategory={"userCategoryName":this.userCategoryName}
    this.userCategoryService.addUserCategory(userCategory).subscribe({
      next:(resp)=>{
        this.toasterService.success("User Category Added Succesfully")
        this.router.navigateByUrl("/app-list-user-category")
      },
      error:(error)=>{
        this.toasterService.error("User Category Not Added")
      }
    })
    
  }

}
