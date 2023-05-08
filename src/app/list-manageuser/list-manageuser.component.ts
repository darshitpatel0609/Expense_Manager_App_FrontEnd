import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ManageuserService } from '../manageuser.service';

@Component({
  selector: 'app-list-manageuser',
  templateUrl: './list-manageuser.component.html',
  styleUrls: ['./list-manageuser.component.css']
})
export class ListManageuserComponent {

  constructor(private manageUserService:ManageuserService, private toasterService: ToastrService){}

  users=[]
  ngOnInit():void{
    this.manageUserService.getAllUser().subscribe(resp=>{
      this.users = resp;
    })
  }

  delete(manageUserId:any){
    this.manageUserService.deleteUser(manageUserId).subscribe({ 
      next:(resp)=>{
        this.users=this.users.filter(addUser=>addUser['manageUserId'] != manageUserId)
        this.toasterService.success("User Deleted Succesfully...!")
      },error:(error)=>{
        this.toasterService.error("User not Deleted ...!")
      }
    })
  }


}
