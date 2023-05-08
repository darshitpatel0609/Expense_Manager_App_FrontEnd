import { Component } from '@angular/core';
import { UserSubCategoryService } from '../user-sub-category.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-sub-category',
  templateUrl: './user-sub-category.component.html',
  styleUrls: ['./user-sub-category.component.css']
})
export class UserSubCategoryComponent {
  constructor(private userSubCategoryService:UserSubCategoryService,private router:Router, private toasterService: ToastrService){}

  userSubCategoryName:String=""

  addUserSubCategory(){
    console.log(this.userSubCategoryName);
    let subCategory={"userSubCategoryName":this.userSubCategoryName}
    this.userSubCategoryService.addUserSubCategory(subCategory).subscribe({
      next:(resp)=>{
        this.toasterService.success("User SubCategory Added Succesfully")
        this.router.navigateByUrl("/app-list-user-sub-category")
      },
      error:(error)=>{
        this.toasterService.error(" User SubCategory Not Added")
      }
    })
    
  }

}
