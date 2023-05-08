import { Component } from '@angular/core';
import { SingupService } from '../singup.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {

  constructor(private singUpService:SingupService, private toasterService: ToastrService){}

  users=[]
  ngOnInit():void{
    this.singUpService.getAllUser().subscribe(resp=>{
      this.users = resp;
    })
  }

  delete(userId:any){
    this.singUpService.deleteUser(userId).subscribe({ 
      next:(resp)=>{
        this.users=this.users.filter(addUser=>addUser['userId'] != userId)
        this.toasterService.success("User Deleted Succesfully...!")
      },error:(error)=>{
        this.toasterService.error("User not Deleted ...!")
      }
    })
  }

}
