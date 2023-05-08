import { Component } from '@angular/core';
import { UserSubCategoryService } from '../user-sub-category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-user-sub-category',
  templateUrl: './list-user-sub-category.component.html',
  styleUrls: ['./list-user-sub-category.component.css']
})
export class ListUserSubCategoryComponent {

  constructor(private userSubCategoryService:UserSubCategoryService, private toasterService: ToastrService){}

  subCategories=[]
  ngOnInit():void{
    this.userSubCategoryService.getAllUserSubategory().subscribe({
      next:(resp)=>{
        this.subCategories=resp;
        this.toasterService.success("All User Sub Category Details Fetched")

      }
    })
  }

  deleteUserSubCategory(userSubCategoryId:any){
    this.userSubCategoryService.deleteUserSubCategory(userSubCategoryId).subscribe({
      next:(resp)=>{
        this.subCategories = this.subCategories.filter(subCategory=>subCategory['userSubCategoryId']!=userSubCategoryId)
        this.toasterService.success("User SubCategory Deleted Successfully...")
      },
      error:(error)=>{
        this.toasterService.error("User SubCategory Not Deleted...!")
      }
    })
  }

}
