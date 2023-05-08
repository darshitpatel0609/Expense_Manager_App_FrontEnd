import { Component } from '@angular/core';
import { ManageCategoryService } from '../manage-category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  constructor(private manageCategoryService:ManageCategoryService, private toasterService: ToastrService){}

  categories=[]
  ngOnInit():void{
    this.manageCategoryService.getAllCategory().subscribe({
      next:(resp)=>{
        this.categories=resp;
        this.toasterService.success("All Category Details Fetched")

      }
    })
  }

  deleteCategory(categoryId:any){
    this.manageCategoryService.deleteCategory(categoryId).subscribe({
      next:(resp)=>{
        this.categories = this.categories.filter(category=>category['categoryId']!=categoryId)
        this.toasterService.success("Category Deleted Successfully...")
      },
      error:(error)=>{
        this.toasterService.error("Category Not Deleted...!")
      }
    })
  }

}
