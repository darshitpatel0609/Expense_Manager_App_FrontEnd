import { Component } from '@angular/core';
import { UserCategoryService } from '../user-category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-user-category',
  templateUrl: './list-user-category.component.html',
  styleUrls: ['./list-user-category.component.css']
})
export class ListUserCategoryComponent {

  constructor(private userCategoryService:UserCategoryService, private toasterService: ToastrService){}

  userCategories=[]
  ngOnInit():void{
    this.userCategoryService.getAllUserCategory().subscribe({
      next:(resp)=>{
        this.userCategories=resp;
        this.toasterService.success("All User Category Details Fetched")

      }
    })
  }

  deleteUserCategory(userCategoryId:any){
    this.userCategoryService.deleteUserCategory(userCategoryId).subscribe({
      next:(resp)=>{
        this.userCategories = this.userCategories.filter(userCategory=>userCategory['userCategoryId']!=userCategoryId)
        this.toasterService.success("User Category Deleted Successfully...")
      },
      error:(error)=>{
        this.toasterService.error(" User Category Not Deleted...!")
      }
    })
  }

}
