import { ToastrService } from 'ngx-toastr';
import { ManageSubcategoryService } from './../manage-subcategory.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-subcategory',
  templateUrl: './list-subcategory.component.html',
  styleUrls: ['./list-subcategory.component.css']
})
export class ListSubcategoryComponent {

  constructor(private manageSubCategoryService:ManageSubcategoryService, private toasterService: ToastrService){}

  subCategories=[]
  ngOnInit():void{
    this.manageSubCategoryService.getAllCSubategory().subscribe({
      next:(resp)=>{
        this.subCategories=resp;
        this.toasterService.success("All Sub Category Details Fetched")

      }
    })
  }

  deleteSubCategory(subCategoryId:any){
    this.manageSubCategoryService.deleteSubCategory(subCategoryId).subscribe({
      next:(resp)=>{
        this.subCategories = this.subCategories.filter(category=>category['subCategoryId']!=subCategoryId)
        this.toasterService.success("SubCategory Deleted Successfully...")
      },
      error:(error)=>{
        this.toasterService.error("SubCategory Not Deleted...!")
      }
    })
  }

}
