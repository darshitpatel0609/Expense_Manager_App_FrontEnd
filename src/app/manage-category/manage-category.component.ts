import { Component } from '@angular/core';
import { ManageCategoryService } from '../manage-category.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent {
  constructor(private manageCategoryService:ManageCategoryService,private router:Router, private toasterService: ToastrService){}

  categoryName:String=""

  addCategory(){
    console.log(this.categoryName);
    let category={"categoryName":this.categoryName}
    this.manageCategoryService.addCategory(category).subscribe({
      next:(resp)=>{
        this.toasterService.success("Category Added Succesfully")
        this.router.navigateByUrl("/app-list-category")
      },
      error:(error)=>{
        this.toasterService.error("Category Not Added")
      }
    })
    
  }

}
