import { Component } from '@angular/core';
import { ManageSubcategoryService } from '../manage-subcategory.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent {
  constructor(private manageSubCategoryService:ManageSubcategoryService,private router:Router, private toasterService: ToastrService){}

  subCategoryName:String=""

  addSubCategory(){
    console.log(this.subCategoryName);
    let category={"subCategoryName":this.subCategoryName}
    this.manageSubCategoryService.addCategory(category).subscribe({
      next:(resp)=>{
        this.toasterService.success("SubCategory Added Succesfully")
        this.router.navigateByUrl("/app-list-subcategory")
      },
      error:(error)=>{
        this.toasterService.error("SubCategory Not Added")
      }
    })
    
  }


}
